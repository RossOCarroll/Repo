=begin

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, and whose digits 
occur exactly once each. So, for example, 49 is a featured number, but 98 is not (it is not odd), 97 is not 
(it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a method that takes a single integer as an argument, and returns the next featured number that is greater 
than the argument. Return an error message if there is no next featured number.

Examples:

Copy Code
featured(12) == 21
featured(20) == 21
featured(21) == 35
featured(997) == 1029
featured(1029) == 1043
featured(999_999) == 1_023_547
featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements


Input:
  -integer

Output
  -integer representing the next featured number, a multiple of seven, an odd number and has unique digits

Rules:
  Explicit:
    -return a invalid message if there is no possible featured number

data structure
  -integers

Algorithim:
  -Return invalid if number is over 9 mill
  -Loop and increment input number
    -Check if the number is divisable by 7 evenly num % 7 == 0
    -Check if number is odd?
    -Check if number has unique digits
      -converting number to a string
        -Split number intop an array
          -Call unique method on array and does it matrach number?
  -Return featured number

=end

def unique_digits(num)
  num.to_s.chars.uniq == num.to_s.chars
end


def featured(num)
  return 'invalid number' if num > 10_000_000_000

  

  loop do
    num += 1

    
    break if num.odd? && num % 7 == 0 && unique_digits(num)
  end
  num
end




p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -
