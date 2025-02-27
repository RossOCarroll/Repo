require 'sinatra'
require 'sinatra/reloader'
require 'securerandom'

configure do 
  enable :sessions 
  set :session_secret, SecureRandom.hex(32)
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

get '/' do 
  session[:budget] ||= { income: 0, expenses: [] }
  @budget = session[:budget]
  @balance = calculate_balance(@budget)
  erb :index
end

get '/set_income' do 
   erb :set_income
end

post '/set_income' do 
  if valid_number?(params[:income])
    session[:budget][:income] = params[:income].to_f.round(2)
    session[:message] = "You entered #{params[:income]} as your monthly income."
    redirect '/'
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
    session[:budget][:expenses] << expense
    redirect '/'
  else
    session[:message] = "Invalid input: #{errors.join(', ')}"
    erb :add_expense  
  end
end

get '/:expense/edit' do 
  @expense = session[:budget][:expenses].find { |expense| expense[:name] == params[:expense]}
  @categories = get_categories

  erb :edit
end

post '/edit_expense' do 
  expense = session[:budget][:expenses].find { |expense| expense[:name] == params[:original_name]}

  updated_expense = {
    name: params[:name].to_s.strip,
    amount: params[:amount].to_f.round(2),
    category: params[:category]
  }

  errors = valid_expense(updated_expense)

  if errors.empty?
    session[:message] = "#{params[:name]} has been edited on your monthly budget."
    expense.merge!(updated_expense)
    redirect '/'
  else
    session[:message] = "Invalid input: #{errors.join(', ')}"
    @expense = updated_expense 
    @categories = get_categories
    erb :edit
  end
end

post '/:expense_name/delete' do
  expense = session[:budget][:expenses].find { |expense| expense[:name] == params[:expense_name] }
  session[:budget][:expenses].delete(expense)

  session[:message] = "#{params[:expense_name]} has been deleted."
  redirect '/'
end