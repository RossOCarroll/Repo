# [1, 2, 3].each do |num|
#   puts num
# end

# hash = {a: 1, b: 2, c: 3}

# hash.each do |key, value|
#   puts "The key #{key} and the value is #{value}"
# end

# def a_method
#   [1, 2, 3].each do |num|
#     puts num * 2
#   end

#   puts 'hi'
# end

# puts a_method

[1, 2, 3].select do |num|
  num.odd?
end

