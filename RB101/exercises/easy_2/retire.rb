puts "What is your age?"
age = gets.chomp.to_i

puts "At what age would you like to retire?"
retirement_age = gets.chomp.to_i

years_left = retirement_age - age

retirement_year = Time.now.year + years_left

puts "Its #{Time.now.year}. you will retire in #{retirement_year}.
You only have #{years_left} to go!"