# Write a method named include? that takes an Array and a search value as arguments. This method should 
# return true if the search value is in the array, false if it is not. You may not use the Array#include? method in your solution.

# input:
#   - Array collection
#   - search element

# output
#   - Boolean true or false

# Explicit requirments:
#   - Cant use the #include? method

# Implicit requirments:
#   - there will be empty arrays
#   - Array may include nil

# Ouestions:
#   - Input array collections only numberical?

# test cases / Exsamples:

# include?([1,2,3,4,5], 3) == true
# include?([1,2,3,4,5], 6) == false
# include?([], 3) == false
# include?([nil], nil) == true
# include?([], nil) == false

# data structure:
#   - Arrays
#   - Integers

# algorithim:
#   -iterate through input array
#     -cross check if search number equals element in each iteration
#     - return true ot false


def include?(array, num)
  
  array.any?(num)

end

p include?([1,2,3,4,5], 3) #== true
p include?([1,2,3,4,5], 6) #== false
p include?([], 3) #== false
p include?([nil], nil) #== true
p include?([], nil) #== false