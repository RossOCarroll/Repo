# Write a method that takes an Array as an argument, and reverses its elements in place; that is, 
# mutate the Array passed into this method. The return value should be the same Array object.

# You may not use Array#reverse or Array#reverse!.

# Input:
#   - array

# output
#   - the same array but with elements reversed in place

# Explicit requirments:
#   - Output azrray should be the same array mutated
    # - Reverse the elements in the array not in a single string
  
#   list = [1,2,3,4]
#   result = reverse!(list)
#   result == [4, 3, 2, 1] # true
#   list == [4, 3, 2, 1] # true
#   list.object_id == result.object_id # true
  
#   list = %w(a b e d c)
#   reverse!(list) == ["c", "d", "e", "b", "a"] # true
#   list == ["c", "d", "e", "b", "a"] # true
  
#   list = ['abc']
#   reverse!(list) == ["abc"] # true
#   list == ["abc"] # true
  
#   list = []
#   reverse!(list) == [] # true
#   list == [] # true

#   data structure:
#     -array

# Algorithm: 
#   -Find the size of the input array
#   -Iterate through input array 
#     -prepend the last elment to the input array
#     - stop at the end of the array size
#   - return array

def reversed_array(array)
  array.each_with_index.map {|value, index| array[array.count - index - 1] }
end

p reversed_array([1, 2, 3, 4]) 
p reversed_array(%w(a b c d e)) 
p reversed_array(['abc']) 
p reversed_array([]) 
