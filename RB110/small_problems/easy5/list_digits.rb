# Write a method that takes one argument, a positive integer, and returns a list of the digits in the number.

# Input:
#   -Integers

# Output:
#   -Array of Integers

# Explicit requirements:
#   -takes one argument
#   -return digits 

# Implicit Requrements:
#   -Return an array of Integers


# Test cases / Exsamples

# puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
# puts digit_list(7) == [7]                     # => true
# puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
# puts digit_list(444) == [4, 4, 4]             # => true


# Data structure:
#   - Integers
#   - Arrays

# Algorithm
#   - Set an output array to empty array
#   - Split input Integers
#   - iterate over Integers
#   - Pass integers to output array

def digit_list(integer)
  integer.to_s.split(//).map {|num| num.to_i }
end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true