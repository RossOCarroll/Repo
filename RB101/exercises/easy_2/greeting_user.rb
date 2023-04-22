
puts "What is your name?"
name = gets.chomp!

if name.include? "!"
  name = name.chop!
  puts "hello #{name}, why are you yelling?".upcase
else
  puts "hello #{name}."
end