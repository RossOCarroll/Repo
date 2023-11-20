# Write a method that takes one argument, an array containing integers, and returns the average of all numbers in 
# the array. The array will never be empty and the numbers will always be positive integers. 
# Your result should also be an integer.

# Don't use the Array#sum method for your solution - see if you can solve t
# his problem using iteration more directly.

# Input:
#   -Array of integers

# Output:
#   -Return an integer representing the avaerage of the elements in the array

# Rules:
#   Explicit: 
#     -Result should be an integer
#     -May not use the Array#sum method
#     -Array will always have positive integers
#     -No inout will be an empty array

# Test Cases /  Exsamples :

# puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
# puts average([1, 5, 87, 45, 8, 8]) == 25
# puts average([9, 47, 23, 95, 16, 52]) == 40

# Data Structure:
#   -Array

# Algorithm:
#   - Save the sum of integers to sum_of_integers
#   - Divide the sum by the number of integers in array
#   - Return result



def average(numbers)
  sum_of_integers = numbers.inject(:+).to_f

  sum_of_integers / numbers.size

end




puts average([1, 6]) #== 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40

  