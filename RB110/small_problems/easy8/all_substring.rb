# Write a method that returns a list of all substrings of a string. The returned list 
# should be ordered by where in the string the substring begins. This means that all 
# substrings that start at position 0 should come first, then all substrings that start 
# at position 1, and so on. Since multiple substrings will occur at each position, 
# the substrings at a given position should be returned in order from shortest to longest.

# You may (and should) use the leading_substrings method you wrote in the previous exercise:

# Input:
#   - string

# Output
#   - Array with all substrings starting at position and moving up
    
# Rules:
#   - Explicit :
#     - sub string at a given order should start from shortest to longest
#     - Should use leading strings method
#   - Implicit:
#     - Strings will consist of letters

#   Questions:
#     - Will there be empty strings?
#     - should the ubput array stay intact?

#   Test cases / exsamples:

#     substrings('abcde') == [
#       'a', 'ab', 'abc', 'abcd', 'abcde',
#       'b', 'bc', 'bcd', 'bcde',
#       'c', 'cd', 'cde',
#       'd', 'de',
#       'e'
#     ]

# Data struture:
#     - Arrays
#     - Strings

# Algorithm:
#     -Set a all_sub_strings_array to an empty array
#     -set an counter at 0
#     -set an index at 0
#     -loop through through input string
#       - call leading_substrings on input string
#       - save return to all_sub_strings_array
#       - incrment counter
#       - break if counter equals input string size
#     - return all_sub_strings_array




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


def substrings(input_string)
  all_sub_strings = []
  counter = 0
  indexed = 0

  loop do
    substring = input_string[indexed..-1]
    all_sub_strings << leading_substrings(substring)

    indexed += 1
    counter += 1
    break if counter == input_string.size

  end
  all_sub_strings.flatten

end


p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]
  