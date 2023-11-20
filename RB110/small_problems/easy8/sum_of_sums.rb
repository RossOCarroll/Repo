# Write a method that takes an Array of numbers and then returns the sum of the sums of each 
# leading subsequence for that Array. You may assume that the Array always contains at least 
# one number.

# Input:
#   -Array of integers

# Output:
#   -Interger that is the sum of sums

# Explicit requirments:
#   -Assume array will contian at least one number

# Implicit requirments:
#   -Return an integers
#   -If there is one element in the input array return just the element

# Questions:
#   -

# Test cases / exsamples : 

# sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
# sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# sum_of_sums([4]) == 4
# sum_of_sums([1, 2, 3, 4, 5]) == 35

# Data Structure:
#   -array
#   assisting Structure
#     Array
#   _integers

# Algorithm:
#   -Set a sum_of_sums variable and set to empty array
#   -Set a counter to 0
#   -set an array size to the size of the array
#   -Loop through input array
#     -Append element at counter index in array to sum_of_sums
#     -Append the last number to array
#     -Incment the counter by 1
#     -decrement the array size by one
#   -sum the sum_of_sums array


def sum_of_sums(numbers)
  sum_total = 0
  accumulator = 0

  numbers.each do |num|
    accumulator += num
    sum_total += accumulator
  end

  sum_total
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
# sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# sum_of_sums([4]) == 4
# sum_of_sums([1, 2, 3, 4, 5]) == 35