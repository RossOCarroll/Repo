request_line = "GET /?rolls=2&sides=6 HTTP/1.1"

http_method, path_and_params, http = request_line.split(" ")
path, params = path_and_params.split("?")

puts params

params = params.split("&").each_with_object({}) do |pair, hash|
  key, value  = pair.split("=")
  hash[key] = value
end

puts request_line
puts http_method
puts path
puts params