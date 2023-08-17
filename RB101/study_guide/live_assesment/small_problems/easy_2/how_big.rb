puts "Enter the width of the room in meters:"
width = gets.chomp.to_i

puts "Enter the length of the room in meters:"
length = gets.chomp.to_i

square_me = length * width
square_ft = (length * width) * 10.7639

puts "The area of the room is #{square_me} square meters. (#{square_ft} square feet)"