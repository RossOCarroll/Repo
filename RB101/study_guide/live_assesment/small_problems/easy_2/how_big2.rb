puts "Enter the width of the room in feet:"
width = gets.chomp.to_f

puts "Enter the length of the room in feet:"
length = gets.chomp.to_f

square_ft = length * width
square_in = (length * width) * 144
square_cent = (length * width) * 929.03

puts "The dimentions of the room:"
puts "Square feet: #{square_ft}"
puts "Square inches: #{square_in}"
puts "Square centimeters: #{square_cent}"