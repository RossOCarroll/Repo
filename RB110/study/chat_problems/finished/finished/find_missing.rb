=begin


Problem: Find Missing Number
Write a method find_missing that takes an array of integers from 1 to n (inclusive) with one number missing and 
returns the missing number.

input:
  -An array of integers in consective order with one integer missing

output:
  -The missing integer

Rules:

Algorithm:
  -Create an array to compare the input array to
  -Compare new array with input array
  -Return missing number

=end

def find_missing(nums)
  comparing_array = []
  1.upto(nums.last) {|num| comparing_array << num}

  comparing_array - nums

  
end

# Test cases
puts find_missing([1, 2, 4, 5, 6]) # Output should be 3
puts find_missing([2, 3, 4, 5, 6]) # Output should be 1
puts find_missing([1, 2, 3, 4, 6]) # Output should be 5