numbers = []
count = 0

while numbers
  numbers << rand(100)
  count += 1
  break if count > 10
end 

puts numbers