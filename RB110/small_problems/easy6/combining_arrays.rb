# Write a method that takes two Arrays as arguments, and returns an Array that contains all of the values from the argument Arrays. 
# There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays.


# input:
#   - 2 arrays 

# Output:
#   - an array that has the two arrays combine with no duplicate number

# Explicit requirments:
#   - New array should have no duplicates

# Questions:
#   - returning a new array?

# Test cases / exsamples:

# merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# Data Structure:
#   - Arrays

# Algorithm:
#   - Set a merged array 
#   - combine both input arrays
#   - remove all duplicate elements
#   - return new array


def merge(array1 , array2)
  array1.concat(array2).uniq
  

end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

