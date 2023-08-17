puts "Please write a word or multiple words:"
input = gets.chomp

result = input.delete(' ').length

puts "There are #{result} in #{input}"

