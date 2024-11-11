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
  @user_info = @users[@user_name]

  if @user_info
    erb :user_profile
  else 
    status 404
    "user not found"
  end
end

helpers do 
  def count_users
    @users.count 
  end

  def count_interests
    @users.values.sum { |user| user[:interests].count }
  end
end