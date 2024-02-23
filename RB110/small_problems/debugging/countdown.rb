# def decrease(counter) #This method has its own self contianed scope, the countdown variable remains unchanged when its called on
#   counter -= 1
# end

# counter = 10

# 10.times do
#   puts counter
#   counter -= 1
# end

# puts 'LAUNCH!'


## Further exploration

10.downto(1) do |num|
  puts num
  num -= 1
end

puts 'LAUNCH!'