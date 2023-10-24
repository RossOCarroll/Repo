# The String#to_i method converts a string of numeric characters (including an optional plus or 
# minus sign) to an Integer. String#to_i and the Integer constructor (Integer()) behave 
# similarly. In this exercise, you will create a method that does the same thing.

# Write a method that takes a String of digits, and returns the appropriate number as an 
# integer. You may not use any of the methods mentioned above.

# For now, do not worry about leading + or - signs, nor should you worry about invalid 
#   characters; assume all characters will be numeric.

# You may not use any of the standard conversion methods available in Ruby to convert
#  a string to a number, such as String#to_i, Integer(), etc. Your method should do 
#  this the old-fashioned way and calculate the result by analyzing the characters in the 
#  string

# Input:
#   - string of Integers

# Output:
#   - Integers

# Explisit requirements:
#   - may not use standard converstion methods ie String#to_i , Integer().
#   - Dont worry about '+ , -' or invaliad characters. 

# Examples / Test cases:

# string_to_integer('4321') == 4321
# string_to_integer('570') == 570

# Data structures
#  - Arrays
#  - string
#  - Integers

# Algorithm:
#   1. Initialize new variable new_array and set to an empty array
#   2. Split input string into array
#   3. iterate over input string
#     1. pass each element to new_array 
#     2. covert each element to integer
#   4. concat new_array to integer

def string_to_integer(string)
  digit_hash = {"0" => 0, "1" => 1, "2" => 2, "3" => 3, "4" => 4, "5" => 5, "6" => 6, "7" => 7, "8" => 8, "9" => 9}
  array = string.split(//)
  total = []

  array.each do |num|
   total << digit_hash[num]

  end
  total.inject {|a, i| a * 10 + i}
end

# p string_to_integer('4321') == 4321
# p string_to_integer('570') == 570


def string_to_signed_integer(string)

  if string.include?('-')
    string.slice!(0)
    string_to_integer(string) * -1
  elsif string.include?('+')
    string.slice!(0)
    string_to_integer(string)
  else
    string_to_integer(string)
  end

end




p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100

