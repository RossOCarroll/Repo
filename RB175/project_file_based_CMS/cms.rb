require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "redcarpet"
require 'securerandom'
require "yaml"
require "bcrypt"
require "fileutils"

set :public_folder, File.expand_path('../public', __FILE__)

configure do
  enable :sessions
  secret = SecureRandom.hex(32)
  set :session_secret, secret

  set :public_folder, File.expand_path('../data', __FILE__)
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def load_file_content(path)
  content = File.read(path)
  case File.extname(path)
  when ".txt"
    headers["Content-Type"] = "text/plain"
    content
  when ".md"
    erb render_markdown(content)
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load_file(credentials_path)
end

def valid_credentials?(username, password)
  credentials = load_user_credentials

  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

def valid_file_extension?(file_name)
  ext_name = File.extname(file_name)
  [".txt", ".md"].include?(ext_name)
end

def user_signed_in?
  session.key?(:username)
end

def guest_user_redirect
  unless user_signed_in?
    session[:message] = "You must be signed in to do that."
    redirect '/'
  end
end

get "/" do
  pattern = File.join(data_path, "*")

  @files = Dir.glob(pattern).map do |path|
    File.basename(path)
  end
  erb :index, layout: :layout
end

get "/new" do
  guest_user_redirect
  erb :new, layout: :layout
end

get "/:filename" do
  file_path = File.join(data_path, params[:filename])

  if File.exist?(file_path)
    load_file_content(file_path)
  else
    session[:message] = "#{params[:filename]} does not exist."
    redirect "/"
  end
end

get "/:filename/edit" do
  guest_user_redirect
  file_path = File.join(data_path, params[:filename])

  @filename = params[:filename]
  @content = File.read(file_path)

  erb :edit, layout: :layout
end

post "/create" do
  guest_user_redirect

  filename = params[:filename].to_s

  file_path = File.join(data_path, filename)

  File.write(file_path, '')
  session[:message] = "#{params[:filename]} has been created."

  redirect "/"
end

post "/:filename/delete" do 
  guest_user_redirect
  file_path = File.join(data_path, params[:filename])

  File.delete(file_path)
  session[:message] = "#{params[:filename]} has been deleted."

  redirect "/"

end

post "/:filename/duplicate" do 
  guest_user_redirect 
  file_path = File.join(data_path, params[:filename])
  duplicate_path = File.join(data_path, "copy_of_#{params[:filename]}")

  FileUtils.cp(file_path, duplicate_path)
  session[:message] = "#{params[:filename]} has been duplicated."

  redirect "/"
end

post "/:filename" do
  guest_user_redirect
  file_path = File.join(data_path, params[:filename])

  File.write(file_path, params[:content])

  session[:message] = "#{params[:filename]} has been updated."
  redirect "/"
end

get "/users/signin" do 
  erb :signin, layout: :layout
end

post "/users/signin" do
  username = params[:username]

  if valid_credentials?(username, params[:password])
    session[:username] = username
    session[:message] = "Welcome!"
    redirect "/"
  else
    session[:message] = "Invalid credentials"
    status 422
    erb :signin, layout: :layout
  end
end

post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."
  redirect "/"
end

get "/users/signup" do 
  erb :signup, layout: :layout
end

post "/users/signup" do 
  username = params[:username].strip
  password = params[:password]

  if username.empty? || password.empty? 
    session[:message] = "Username and password must not be empty."
    status 422
    erb :signup, layout: :layout
  elsif load_user_credentials.key?(username)
    session[:message] = "This user already exists."
    status 422
    erb :signup , layout: :layout
  else 
    credentials = load_user_credentials 
    credentials[username] = BCrypt::Password.create(password).to_s

    File.write(File.expand_path("../users.yml", __FILE__), credentials.to_yaml)

    session[:message] = "User has been created please sign in."
    redirect "/users/signin"
  end

end

# get "/upload_image" do 
#   erb :upload_image
# end

# post "/upload_image" do 
  
# end

