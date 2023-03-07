def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

numerator = nil
loop do 
puts "please enter the numerator:"
  numerator = gets.chomp
  break if valid_number?(numerator)
  puts "Invalid input"
end

denominator = nil
loop do
puts "please enter the denominator:"
  denominator = gets.chomp
  if denominator == '0'
    puts "Invalid number, 0 is not aloud"
  else   
    break if valid_number?(denominator)
    puts "invalid input" 
  end
end

answer = numerator.to_i / denominator.to_i
puts " #{numerator} / #{denominator} is #{answer}"

