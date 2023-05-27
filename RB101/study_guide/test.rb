time_till_bus = 3

loop do
  time_till_bus = time_till_bus - 1

  if time_till_bus == 1
    puts "Bus nearly here"
    next
  end

  if time_till_bus == 0
    puts "Bus arrived"
    break
  end

  puts "#{time_till_bus} minutes until next bus"
end
