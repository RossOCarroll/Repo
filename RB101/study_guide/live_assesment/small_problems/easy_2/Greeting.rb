puts "What is your name?"
name = gets.chomp!

if name.include? "!"
  name.chop!
  puts "Hello #{name}, Why are you screaming?".upcase
else
  puts "Hello, #{name}"
end

