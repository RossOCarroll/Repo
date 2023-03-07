
loop do
puts "How many lines do you want to print? at least 3"
input = gets.chomp.to_i

if input < 3
  puts "not enough lines"
  break
elsif 
  input.times { |x| puts "Launch School is the Best"}
  break
end
end





