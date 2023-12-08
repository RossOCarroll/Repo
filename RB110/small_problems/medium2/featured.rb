=begin

A featured number (something unique to this exercise) is an odd number that is a multiple 
of 7, and whose digits occur exactly once each. So, for example, 49 is a featured number, 
but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not 
(the digit 3 appears twice).

Write a method that takes a single integer as an argument, and returns the next featured 
number that is greater than the argument. Return an error message if there is no next 
featured number.

Input:
  -Integer .. starting point

Output:
  -integer that is the next featured number.. a number that is odd, a multiple of seven and has 
   no repeating digits

Rules
  -Exipcit
    -Write in an error if there is no possible featured number

Test cases / exsamples:

featured(12) == 21
featured(20) == 21
featured(21) == 35
featured(997) == 1029
featured(1029) == 1043
featured(999_999) == 1_023_547
featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements

Data Structure:
  -integers

Assisting:
  -array

Algorithm
  -Create a helper method to check wether a number is a multiple of 7
  -Create a helper method to check wether a number has unique digits
  -Create a helper method that checks if the number is over a billion
  -loop 
    -increment starting num by 1
    -check if the number is odd and is multiple of 7 and also has only unique digits
      -if true break
    -Return number

=end

# def is_multiple_seven(num)
#   num % 7 == 0
# end

# def unique_digits(num)
#   num.to_s.chars.uniq.length == num.to_s.length
# end

# def possible_feature(num)
#   num < 1000000000
# end

# def featured(num)
#   return :invalid_num unless possible_feature(num) 
#   num += 1
#   num += 1 until num.odd? && num % 7 == 0

  
#   loop do

#     if is_multiple_seven(num) && unique_digits(num) && num.odd? && possible_feature(num)
#       break
#     end
#     num += 14
#   end
#   p num
# end

def featured(number)
  number += 1
  number += 1 until number.odd? && number % 7 == 0

  loop do
    number_chars = number.to_s.split('')
    return number if number_chars.uniq == number_chars
    number += 14
    break if number >= 9_876_543_210
  end

  'There is no possible number that fulfills those requirements.'
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements