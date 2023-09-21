[1, 2, 3].reject do |num|
  puts num
end

# the reject method will return a new array whose elements from self for which the block return
# false or nil. This code will output the array [1, 2, 3] as the block returns nil when the
# puts method is called on num. 