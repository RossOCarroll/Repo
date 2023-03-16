puts "Welcome to calculator!"

puts "Please enter a number:"
num1 = gets.chomp  

puts "Please enter a second number:"
num2 = gets.chomp

puts "Would operation would you like to preform? (1.add, 2.subtract, 3.multiply or 4.divide)"
operation = gets.chomp.to_i

  if operation == 1
    result = num1.to_i + num2.to_i
  elsif operation == 2
    result = num1.to_i - num2.to_i
  elsif operation == 3
    result = num1.to_i * num2.to_i
  else operation == 4
    result = num1.to_f / num2.to_f
  end

puts "Your result is #{result}"