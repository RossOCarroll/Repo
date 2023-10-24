# Write a method that determines and returns the ASCII string value of a string that is passed in as an argument. 
# The ASCII string value is the sum of the ASCII values of every character in the string. 
# (You may use String#ord to determine the ASCII value of a character.)

# Input: 
#   - string

# Output:
#   - Integer

# Implicit requirments:
#   -Output must be an Integer
#   -An empty string should yeild 0

# Explicit requirements:
#   -May us string#ord method 

# Exsample / Test cases

# ascii_value('Four score') == 984
# ascii_value('Launch School') == 1251
# ascii_value('a') == 97
# ascii_value('') == 0

# Data Structure:
#   -String
#   -Integer
#   -array?

# Algorithm:
#   1. Split input string in to array and save as array
#   2. iterate over each element in array 
#     1. convert each element to numerical using string#ord
#   3. sum the elements in the array


def ascii_value(string)
  array = string.split(//)

  array.map! { |element| element.ord}
  array.sum
end
  

puts ascii_value('Four score') == 984
puts ascii_value('Launch School') == 1251
puts ascii_value('a') == 97
puts ascii_value('') == 0
