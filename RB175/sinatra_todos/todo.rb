require "sinatra"
require "sinatra/reloader"
require "sinatra/content_for"
require "tilt/erubis"
require 'securerandom'

configure do 
  enable :sessions
  set :session_secret, SecureRandom.hex(32)
end

before do 
  session[:lists] ||= []
end

get "/" do 
  redirect "/lists"
end

#View if lists
get "/lists" do
  @lists = session[:lists]
  erb :lists, layout: :layout
end

# Render the new list form
get "/lists/new" do
  erb :new_list, layout: :layout
end

#Return an error message if the name is invalid, other wise will return nil
def error_for_list_message(name)
  if !(1..100).cover? name.size
    "List name must be between 1 and 100 characters." 
  elsif session[:lists].any? { |list| list[:name] == name }
    "List name must be unique."
  end
end

# Create a new list
post "/lists" do 
  list_name = params[:list_name].strip
  error = error_for_list_message(list_name)

  if error
    session[:error] = error
    erb :new_list, layout: :layout 
  else 
    session[:lists] << {name: list_name, todos: []}
    session[:success] = "This list has been created."
    redirect "/lists"
  end
end

get "/lists/:id" do
  id = params[:id].to_i
  @list = session[:lists][id]
  erb :list, layout: :layout
end

# Edit and existing todo list
get "/lists/:id/edit" do
  id = params[:id].to_i
  @list = session[:lists][id]
  erb :edit_list, layout: :layout
end

# update existing Todo list
post "/lists/:id" do 
  list_name = params[:list_name].strip
  id = params[:id].to_i
  @list = session[:lists][id]
  error = error_for_list_message(list_name)

  if error
    session[:error] = error
    erb :edit_list, layout: :layout 
  else 
    @list[:name] = list_name
    session[:success] = "This list has been updated."
    redirect "/lists/#{id}"
  end
end