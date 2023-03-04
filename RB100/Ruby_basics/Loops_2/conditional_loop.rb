process_the_loop = [true, false].sample

loop do
  if process_the_loop == true
    puts "The loop was processed!"
    break
  else process_the_loop == false
    puts "The loop wasnt precessed!"
    break
  end
end


