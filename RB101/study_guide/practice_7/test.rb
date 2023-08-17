array = [0, 1, 2, 3, 4, 5]

1.times { index = 0 }

loop do
  puts array[index]
  index += 1
  break if index >= array.length
end