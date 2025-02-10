require "sinatra"
require "sinatra/reloader"
require "tilt"
require "erubis"
require "yaml"

before do 
  @users = YAML.load_file('users.yaml').transform_keys(&:to_s)
end

helpers do
  def count_users
    @users.count
  end

  def count_interests
    @users.sum { |_, user| user[:interests].size }
  end
end

get '/' do
  redirect '/users'
end

get '/users' do

  erb :users
end

get '/:name' do
  @name = params[:name]
  @user = @users[@name]
  @email = @users[@name][:email]
  @interests = @users[@name][:interests].join(', ')

  erb :user
end