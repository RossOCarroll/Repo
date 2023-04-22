

puts '==> Enter the length of the room in feet: '
length = gets.to_f

puts '==> Enter the width of the room in feet: '
width = gets.to_f

square_feet = (length * width).round(2)
square_inch = (144 * square_feet)
square_cent = (929.0304 * square_feet)

puts "The room is #{square_feet} square feet, #{square_inch} square 
inches and #{square_cent} square centimeters."