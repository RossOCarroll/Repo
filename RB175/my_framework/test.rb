require 'erb'
template_file = File.read('example.erb')
erb = ERB.new(template_file)
puts erb.result