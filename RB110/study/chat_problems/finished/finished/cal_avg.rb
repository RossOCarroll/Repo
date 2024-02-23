=begin

Problem: Calculate Average
Write a method calculate_average that takes an array of integers as input and returns the average of all the 
numbers in the array.

Input:
  -An array of integers

Output:
  -A float that represents the average of the integers

Rules:
  Implicit:
    -Return must be a float

Algorithm:
  -Get the sum of all the numbers in the input array
  -Divide by the size of the array
  -Return average as a float

=end


def calculate_average(nums)
  nums.sum / nums.size.to_f
end

# Test cases
p calculate_average([1, 2, 3, 4, 5]) # Output should be 3.0
p calculate_average([2, 4, 6, 8, 10]) # Output should be 6.0
p calculate_average([1, 3, 5, 7, 9]) # Output should be 5.0