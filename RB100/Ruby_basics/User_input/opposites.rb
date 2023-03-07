def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

def read_number
 loop do
  puts "Please enter a positive or negative integer: "
  number = gets.chomp
  return number.to_i if valid_number?(number)
  puts "Invalid number, only non-zero numbers are allowed"
 end
end

num_1 = nil
num_2 = nil

loop do
  num_1 = read_number
  num_2 = read_number
  break if num_1 * num_2 < 0
  puts " Sorry one integer must be positive, on must be negative"
  puts "Please Start over "
end

answer = num_1 + num_2
puts "#{num_1} + #{num_2} = #{answer}"



