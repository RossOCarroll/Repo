
puts "What is the bill?"
bill = gets.chomp.to_f

puts "What is the tip percentage?"
tip = gets.chomp.to_i

tip_dollars = sprintf("%#g",(bill * tip) / 100)
total = sprintf("%#g", tip_dollars + bill)

puts "The tips is $#{tip_dollars} and the total is $#{total}"