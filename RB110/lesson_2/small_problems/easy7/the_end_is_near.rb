# Write a method that returns the next to last word in the String passed to it as an argument.

# Words are any sequence of non-blank characters.

# You may assume that the input String will always contain at least two words.

# Examples:


# Input:
#   -String object of words

# Output:
#   - String object of the next to last word

# Rules:
#   Explicit:
#     - Warod are any sequence of non blank characters
#     - Imput string would be at least 2 characters
#   Implicit:


# Questions?
#   -

# Test Cases / Exsamples : 

# penultimate('last word') == 'last'
# penultimate('Launch School is great!') == 'is'

# Data Structure:
#   -Strings
#   Assisting structure:
#     -Array

# Algorithim:
#   -Split input string into an array 
#   -Return the -2 index on the array

def penultimate(string)
  second_to_last = string.split
  second_to_last[-2]
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'
