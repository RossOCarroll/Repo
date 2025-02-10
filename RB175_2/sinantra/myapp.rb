require 'rack'
require 'rack/handler/webrick'  # Explicitly require the handler

class MyApp
  def call(env)
    body = "<h2>Hello in Style!</h2>".freeze
    ['200', { "Content-Type" => "text/html" }, [body]]
  end
end

# Start the WEBrick server on port 9292
server = Rack::Handler::WEBrick
trap('INT') { server.shutdown }  # Graceful shutdown on Ctrl+C
server.run(MyApp.new, Port: 9292)
