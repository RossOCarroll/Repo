# Write a method that takes an Array as an argument, and returns two Arrays (as a pair of nested Arrays) 
# that contain the first half and second half of the original Array, respectively. If the original array 
# contains an odd number of elements, the middle element should be placed in the first half Array.

# input:
#   -Array

# Output:
#   -An array of 2 nested arrays 

# Explicit requirments:
#   -If the input array has an odd number of elements the middle should be placed in the first array

# Implicit requirements:
#   - Empty array should output two empty nested arrays
#   - if input array has one element it should go in the first array

# Test Cases /  Exsamples:

# halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# halvsies([5]) == [[5], []]
# halvsies([]) == [[], []]

# Algorithm:
#     -Set half_array to empty array
#     -If input array is even
#       - divide first half and second half
#       - append to half array
#     - else if input array is odd
#       - take first half plus 1 on index
#       - append to half array
#     - return half array

def halvsies(array)
  halfed_array = []
  array_half_size = array.size / 2

  if array.size.even?
    array.each_slice(2).to_a
  elsif array.size == 1
    [array, []]
  elsif array.empty?
    [array, array]
  else
    halfed_array << array[0, array_half_size + 1]  
    halfed_array << array[-array_half_size..-1]
  end

end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) #== [[], []]