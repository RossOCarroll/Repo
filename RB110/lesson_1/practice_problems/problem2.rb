['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end

# We can find out more about the count method in ruby docs. Count will call the block 
# on each element and return the count of elements for which the block returns a truthy value.
# in this case it will return 2 as only 2 elements in the array are truthy.