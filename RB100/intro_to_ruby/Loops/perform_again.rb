loop do
  puts "Do you want to do that again?"
  answer = gets.chomp.to_i
  if answer != 1
    break
  end 
end