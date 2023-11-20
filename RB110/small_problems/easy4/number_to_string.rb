# In the previous two exercises, you developed methods that convert simple numeric strings 
# to signed Integers. In this exercise and the next, you're going to reverse those methods.

# Write a method that takes a positive integer or zero, and converts it to a string 
# representation.

# You may not use any of the standard conversion methods available in Ruby, such as 
# Integer#to_s, String(), Kernel#format, etc. Your method should do this the old-fashioned 
# way and construct the string by analyzing and manipulating the number.

# Input:
#   - integer

# Output:
#   - String

# Explicit Requirments:
#   - return a string whout using Rubys conversion methods 

# Exsamples / Test cases

# integer_to_string(4321) == '4321'
# integer_to_string(0) == '0'
# integer_to_string(5000) == '5000'

# Data Structure
#   - Array
#   - Integer
#   - String

# Algorythim:
#   1. Create a Digits hash whit correspoding strings to digits 
#   2. Create an empty array values_array
#   3. Split input integers into array
#   4. Iterate over each element in the values_array 
#     1. Create new_values array
#     2. Append correspoding elements using the digits hash to new_values
#   5. Join elements in new_values


DIGITS = {0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'}

def integer_to_string(integer)
  values_array = integer.digits
  new_values = []

  values_array.each do |num|
    new_values << DIGITS[num]
  end
  new_values.reverse.join
end

# p integer_to_string(4321) == '4321'
# p integer_to_string(0) == '0'
# p integer_to_string(5000) == '5000'

def signed_integer_to_string(integer)
  if integer > 0
    '+' + integer_to_string(integer)
  elsif integer < 0
     neg_int = integer * -1
    '-' + integer_to_string(neg_int)
  else
    integer_to_string(integer)
  end

end



p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'