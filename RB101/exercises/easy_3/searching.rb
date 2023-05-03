puts "==> Enter the first number:"
first = gets.chomp.to_i

puts "==> Enter the second number:"
second = gets.chomp.to_i

puts "==> Enter the third number:"
third = gets.chomp.to_i

puts "==> Enter the fourth number:"
fourth = gets.chomp.to_i

puts "==> Enter the fifth number:"
fifth = gets.chomp.to_i

puts "==> Enter the sixth number:"
sixth = gets.chomp.to_i

numbers = Array.new
first_five = Array.new
first_five.push(first, second, third, fourth, fifth)
numbers.push(first, second, third, fourth, fifth, sixth)

if first_five.include?(numbers[5])
  puts "There is number #{numbers[5]} in #{first_five}"
else 
  puts "There is not number #{numbers[5]} in #{first_five}"
end
