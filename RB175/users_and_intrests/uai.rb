require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require 'yaml'

before do
  @users = YAML.load_file('users.yaml')
end

get "/" do 
  redirect "/users"
end

get "/users" do 
  erb :users
end

get "/:user_name" do
  @user_name = params[:user_name].to_sym
end