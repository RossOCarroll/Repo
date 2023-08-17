puts "What is the bill?"
bill = gets.chomp.to_f

puts "What is the percentage?"
percentage = gets.chomp.to_f

tip = (bill * (percentage / 100)).round(2)
total = (tip + bill).round(2)

puts "The tip is %0.2f" % [tip]
puts "The total is %0.2f" % [total]

