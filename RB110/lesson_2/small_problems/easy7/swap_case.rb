# Write a method that takes a string as an argument and returns a new string in which 
# every uppercase letter is replaced by its lowercase version, and every lowercase letter 
# by its uppercase version. All other characters should be unchanged.

# You may not use String#swapcase; write your own version of this method.

# Input:
#   -String with various cases

# Output:
#   -A new string with the Cases swapped

# Rules:
#   Explicit requirments:
#     - May not use String#swapcase method
#     - All other characters should remain unchanged

#   Implicit requirments:


# Test cases / Exsamples:

# swapcase('CamelCase') == 'cAMELcASE'
# swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# Data Structure:
#   -Strings
#   Assisting structure: Array?

# Algorrthim:
#   -Split string characters
#   -Iterate Through string characters
#     -If element is capitalized? 
#       -Downcase element
#     -else if element is not capitalized?
#       -Upcase element
#      -join string
#     - return string

def swapcase(string)
  result = []

  string.chars.map do |element|
    if element == element.upcase
      result << element.downcase
    else element == element.downcase
      result << element.upcase

    end
    
  end
  result.join
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'