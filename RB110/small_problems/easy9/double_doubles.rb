=begin
A double number is a number with an even number of digits whose left-side digits are
exactly the same as its right-side digits. For example, 44, 3333, 103103, 7676 are all 
double numbers. 444, 334433, and 107 are not.

Write a method that returns 2 times the number provided as an argument, unless the 
argument is a double number; double numbers should be returned as-is.

Input:
  -Integer

Ouput:
  -Integer doubled if its not a double number

Rules:
  Explicit:
    - Return 

  implicit:
    -

Questions:
  -Will input be strickly integers or non-alphanumeric characters?
  -Will there be negative number inputs?

Test cases / Exsamples:

twice(37) == 74
twice(44) == 44
twice(334433) == 668866
twice(444) == 888
twice(107) == 214
twice(103103) == 103103
twice(3333) == 3333
twice(7676) == 7676
twice(123_456_789_123_456_789) == 123_456_789_123_456_789
twice(5) == 10

Data structure:
  -integers
  -string

Assisting structure:
  -possibly an array

Algorthim:
  -Create a helper method that determines if input is a double number
    -Check if number has and even length
    -If number divied equally (at an even number index) is exatly the same
  -If helper method returns true
    -Return number
  -If helper method returns false 
    -Return number times 2

=end

def is_double?(num)
  string_num = num.to_s
  length = num.to_s.length

  if length.even?
    string_num[0, (length / 2)] == string_num[(length / 2)..-1]
  else 
    false
  end
end

def twice(number)

  if is_double?(number)
    number
  else
    number * 2
  end

end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10