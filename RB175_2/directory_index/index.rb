require "sinatra"
require "sinatra/reloader"
require "tilt"
require "erubis"

get "/" do 
  @files = Dir.glob("public/*").map { |file| File.basename(file) }.sort
  @files.reverse! if params[:sort] == 'desc'
  
  erb :home
end