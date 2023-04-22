def square_meters(length, width)
  length * width
end

def square_feet(input)
  input * 10.7639
end

puts "Enter the length of the room in meters:"
length_meters = gets.chomp.to_f

puts "Enter the width of the room in meters:"
width_meters = gets.chomp.to_f

sq_meters = square_meters(length_meters, width_meters)

sq_feet = square_feet(sq_meters)

puts "The area of the room is #{sq_meters} square meters (#{sq_feet} square feet)"

