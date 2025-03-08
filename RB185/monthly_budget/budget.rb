require 'sinatra'
require 'sinatra/reloader'
require 'securerandom'
require 'pry'

require_relative 'database_persistence'

configure do 
  enable :sessions 
  set :session_secret, SecureRandom.hex(32)
  set :erb, escape_html: true
  also_reload "database_persistence.rb"
end

before do
  @logger = logger
  @storage = DatabasePersistence.new(logger)
end

def valid_number?(number)
  number.to_f > 0
end

def valid_expense(expense)
  errors = []

  errors << "Must be a valid name" if expense[:name].size <= 0
  errors << "Must be a valid number" unless valid_number?(expense[:amount])

  errors
end

def get_categories
  ["housing", "utilities", "groceries", "transportation", "insurance", "other"]
end

def calculate_balance(budget)
  total_expenses = 0
  budget[:expenses].each { |expense| total_expenses += expense[:amount] }
  budget[:income] - total_expenses
end

def calculate_yearly(budget)
  yearly_income = budget[:income] * 12
  yearly_expenses = budget[:expenses].map do |expense|
    expense.merge({ amount: expense[:amount] * 12 })
  end
  total_yearly_expenses = yearly_expenses.sum { |expense| expense[:amount] }

  yearly_balance = yearly_income - total_yearly_expenses
  [yearly_income, yearly_expenses, yearly_balance]
end

get '/' do 
    
  erb :login
end

post '/login' do
  username = params[:username].strip
  password = params[:password]

  user = @storage.authenticate_user(username, password)

  if user
    session[:message] = "Welcome #{username}."
    session[:user] = user["id"]
    redirect '/home'
  else
    session[:message] = "Invalid username or password. #{user["id"]}"
    redirect '/'
  end
end


get '/sign_up' do

  erb :signup
end

post '/sign_up' do
  username = params[:username].strip
  password = params[:password]

  if @storage.find_user(username)
    session[:message] = "A user with that name already exists."
    erb :signup
  else
    @storage.add_user(username, password)
    redirect '/'
  end
end

get '/home' do 

  @monthly_income = @storage.get_income(session[:user])
  @expenses = @storage.display_expenses(session[:user])
  @balance = @monthly_income - @expenses.sum { |expense| expense[:amount] }
  erb :index
end

get '/set_income' do
   erb :set_income
end

post '/set_income' do 

  if valid_number?(params[:income])
    @storage.set_income(params[:income], session[:user])
    session[:message] = "You entered #{params[:income]} as your monthly income."
    redirect '/home'
  else
    session[:message] = "Must enter a valid number."  
    erb :set_income
  end
end

get '/add_expense' do
  erb :add_expense
end

post '/add_expense' do
  name = params[:name]
  amount = params[:amount]
  category = params[:category]

  expense = {
    name: name,
    amount: amount.to_f.round(2),
    category: category
  }

  errors = valid_expense(expense)

  if errors.empty?
    session[:message] = "#{expense[:name]} has been added to your monthly budget."    
    @storage.add_expense(expense, session[:user])
    redirect '/home'
  else
    session[:message] = "Invalid input: #{errors.join(', ')}"
    erb :add_expense  
  end
end

get '/:id/edit' do 
  @expense = @storage.find_expense(params[:id], session[:user])
  @categories = get_categories

  erb :edit
end

post '/:id/edit_expense' do 
  expense = @storage.find_expense(params[:id], session[:user])

  updated_expense = {
    name: params[:name].to_s.strip,
    amount: params[:amount].to_f.round(2),
    category: params[:category]
  }

  errors = valid_expense(updated_expense)

  if errors.empty?
    session[:message] = "#{params[:name]} has been edited on your monthly budget."
    @storage.update_expense( params[:id], updated_expense)
    redirect '/home'
  else
    session[:message] = "Invalid input: #{errors.join(', ')}"
    @expense = updated_expense 
    @categories = get_categories
    redirect "/#{params[:id]}/edit"
  end
end

post '/:id/delete' do
  expense = @storage.find_expense(params[:id], session[:user])
  @storage.delete_expense(params[:id], expense["name"])

  session[:message] = "#{expense["name"]} has been deleted."
  redirect '/home'
end

get '/yearly_budget' do 
  @monthly_income = @storage.get_income(session[:user]) || 0
  @expenses = @storage.display_expenses(session[:user])

  @balance = @monthly_income - @expenses.sum { |expense| expense[:amount].to_f }

  # Create a hash with :income and :expenses keys
  budget = { income: @monthly_income, expenses: @expenses }

  @yearly_income, @yearly_expenses, @yearly_balance = calculate_yearly(budget)

  erb :yearly
end

get '/logout' do
  session.clear
  session[:message] = "You have been logged out."
  redirect '/'
end