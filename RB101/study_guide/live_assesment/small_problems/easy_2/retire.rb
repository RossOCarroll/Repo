puts "What is your age?"
age = gets.chomp.to_i

puts "At what age would you like to retire?"
retire_at = gets.chomp.to_i

year = Time.now.year

retire_year =  year + (retire_at - age)
to_go = retire_at - age

puts "Its #{year}. You will retire in #{retire_year}"
puts "You only have #{to_go} years left to go!"