def format(string)
  puts '==>' + string
end

def included(arr, num)
  arr.include?(num)
end

array = []

puts format('Enter the 1st number')
first = gets.chomp.to_i
array << first

puts format('Enter the 2nd number')
second = gets.chomp.to_i
array << second

puts format('Enter the 3rd number')
third = gets.chomp.to_i
array << third

puts format('Enter the 4th number')
fourth = gets.chomp.to_i
array << fourth

puts format('Enter the 5th number')
fifth = gets.chomp.to_i
array << fifth

puts format('Enter the 6th number')
sixth = gets.chomp.to_i


if included(array , sixth)
  format("The number #{sixth} appears in #{array}")
else
  format("The number #{sixth} does not appear in #{array}")
end