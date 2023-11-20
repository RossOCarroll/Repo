# Write a method that takes one argument, a string, and returns a new string with 
# the words in reverse order.

# input:
#   - string

# Output:
#   - A new string in reverse order

# Rules:
#   Explicit:
#     -Return a new string
#     -Any number of spaces should return an empty string
#   Implicit:
#     -An emoty string should return an empty string

#   Questions:
#     -

#   Test Cases // Exsamples:

# puts reverse_sentence('Hello World') == 'World Hello'
# puts reverse_sentence('Reverse these words') == 'words these Reverse'
# puts reverse_sentence('') == ''
# puts reverse_sentence('    ') == '' # Any number of spaces results in ''

# Data Structure:
#   -Strings
#   Assiting structure : array

# Algorithm:
#   - Determine if input string is only space?
#     - if true return an empty string
#   - Split input string into array and save to split_array
#     - Reverse array
#   - Join array back to string and return



def reverse_sentence(string)
  return '' if string.start_with?(' ')
  split_array = string.split

  split_array.reverse.join(' ')
end



puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == '' # Any number of spaces results in ''
