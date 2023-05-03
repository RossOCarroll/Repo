puts "Please write a word or multiple words?"
words = gets.chomp.to_s
characters = words.delete(" ").length

puts "There are #{characters} characters in #{words}"
