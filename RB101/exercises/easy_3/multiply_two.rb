def multiply(x , y)
  x * y
end

def square(x)
  multiply(x, x)
end

def power(x)
  multiply(x, x) * multiply(x, x)
end

puts "==> please enter the first number:"
first_number = gets.chomp.to_f

puts "==> please enter the second number:"
second_number = gets.chomp.to_f

puts "#{first_number} multiplied by #{second_number} is #{multiply(first_number, second_number)}"

p multiply(2, 5)
puts square(5)