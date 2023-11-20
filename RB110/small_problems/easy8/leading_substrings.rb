# Write a method that returns a list of all substrings of a string that start at the beginning of the original string. 
# The return value should be arranged in order from shortest to longest substring.

# Input:
#   -string of letters

# Output
#   -An array with all the sub substrings

# Rules:
#   Explicit: 
#     -return array should be in order of shortest to longest
#   Implicit:
#     -A single element string should return a that signle element into an array

#   Questions:
#     - Will the elements be letters?
    
# Test cases / exsamples :

# leading_substrings('abc') == ['a', 'ab', 'abc']
# leading_substrings('a') == ['a']
# leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# Data structure:
#   -string
#   -Array

# Algorithm:
#   -set and string_size and assign it to input string counter
#   -set a sub_string array and set to an empty array
#   -set an index to 0
#   -loop 
#     - append element  to sub_string array from index 0 to index
#     - increment index 
#     - break if index is equal to string size
#   - Return sub_string array


def leading_substrings(string)
  sub_string_array = []
  index = 1

  loop do
    sub_string_array << string[0, index]

    index += 1
    break if index > string.size
  end

  sub_string_array

end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

