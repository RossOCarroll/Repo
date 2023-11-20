# Write a method that takes a string argument and returns a new string that contains the value of the original 
# string with all consecutive duplicate characters collapsed into a single character.
#  You may not use String#squeeze or String#squeeze!.

# Input:
#   - String

# Output:
#   - String

# Explicit requirments:
#   - May not use string method squeeze or squeeze!
#   - Return a new string

# Implicit Requirements:
#   - Empty string should return empty string

# Questions:
#   - Capization counts in the end result?

# Test cases / Exsamples:

# crunch('ddaaiillyy ddoouubbllee') == 'daily double'
# crunch('4444abcabccba') == '4abcabcba'
# crunch('ggggggggggggggg') == 'g'
# crunch('a') == 'a'
# crunch('') == ''

# Data Structure:
#   - string
#   - array

# Algorithm:
#   - Set string_array to the split of the inout string
#   - iterate over string_array
#     - set a current elements
#     - Reference if current element is equal to previos element
#     - delete current element if its equal to privious element
#   - Return string array.

# def crunch(string)
#   string_array = string.split(//)
#   output_string =''
#   counter = 0

#   string_array.each_char do |letter|
#     previous_element = string_array[counter - 1]
#     output_string << letter if letter != previous_element

#     counter += 1

#   end

#   output_string.join


# end


def crunch(text)
  index = 0
  crunch_text = ''

  while index <= text.length - 1
    crunch_text << text[index] unless text[index] == text[index + 1]
    index += 1
  end
  crunch_text
end

puts crunch('ddaaiillyy ddoouubbllee') #== 'daily double'
puts crunch('4444abcabccba') #== '4abcabcba'
puts crunch('ggggggggggggggg') #== 'g'
puts crunch('a') #== 'a'
puts crunch('') #== ''