statement = "The Flintstones Rock"
flintstones_array = statement.squeeze(' ').split(//)

new_hash = flintstones_array.each_with_object({}) do |(key, num),  hash|
  hash[key] = statement.count(key)

end

puts new_hash