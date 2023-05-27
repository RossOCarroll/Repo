
# PEDAC

# Problem
#   - Input : String object
#   - Output: A string that with no doublicate consecutive letters

#     -Rules:
#       Explicit
          # - You may no use squeeze or squeeze! methods
          # - Output string must have the value of the orginal string with characters 
          #    collapsed
          # - Returns a new string
          # - Return new string not output
#        Implicit
#           -  Only need to concider dulplicate letters + numbers
#           -  If no dublicate letters return ecuvalent string
#           -  Can we mutate input?
# Exsamples and test cases:
#     - crunch('4444abcabccba') == '4abcabcba'

# Data struture:
#       - Strings

# Algorithm
#   - Define a method called crunch that has a pramater called 'str'
#   - Create a new string to build
#   - Iteration through all characters of input string 
#     - Push each character to a new string if it doesnt match the previous character 
#       in new string
#   - Return new string


def crunch(str)
  result = ''

  str.each_char do |char|
    result << char if char != result[-1]
  end

  result
end

p crunch('4444abcabccba') == '4abcabcba'
