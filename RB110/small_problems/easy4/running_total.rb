# Write a method that takes an Array of numbers, and returns an Array with the same 
# number of elements, and each element has the running total from the original Array.

# A running total is the sum of all values in a list up to and including the current 
# element. Thus, the running total when looking at index 2 of the array 
# [14, 11, 7, 15, 20] is 32 (14 + 11 + 7), while the running total at 
# index 3 is 47 (14 + 11 + 7 + 15).

# Input:
#   - array

# Output:
#   - Array with running totals

# Explicit requirments:
#   -Return an array with the same number of elements
#   -Array should have a running total (sum of all values in al lisdt up yo and including the current element)

# Implicit Requirments:
#   - If there is a single element in the input array, return element
#   - if array is empty return empty array

# Exsamples / Test cases :

# running_total([2, 5, 13]) == [2, 7, 20]
# running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# running_total([3]) == [3]
# running_total([]) == []

# Data Structure:
#     -arrays

# Algorithm:
#     1. Create an index of the lenth of the input array array length
#     2. Create a new_array variable
#     3. Iterate over input array up to array length
#       1. Create a current_element and assign at index 0
#       2. take the first element and Append to new_array
#       3. take the sum of values starting at index 0-1
#       4. Append current element to new array
#     5. Return array


def running_total(array)
  sum = 0
  array.each_with_object([]) { |value, array| array << (sum += value)}
end

def running_total2(array)
  sum = 0
  array.each { |value, array| array << sum += value}
end

puts running_total([2, 5, 13]) == [2, 7, 20]
puts running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
puts running_total([3]) == [3]
puts running_total([]) == []
