=begin

Write a method that can rotate the last n digits of a number. For example:

Copy Code
rotate_rightmost_digits(735291, 1) == 735291
rotate_rightmost_digits(735291, 2) == 735219
rotate_rightmost_digits(735291, 3) == 735912
rotate_rightmost_digits(735291, 4) == 732915
rotate_rightmost_digits(735291, 5) == 752913
rotate_rightmost_digits(735291, 6) == 352917
Note that rotating just 1 digit results in the original number being returned.

You may use the rotate_array method from the previous exercise if you want. (Recommended!)

You may assume that n is always a positive integer.

Input:
  -Integer of multiple digits
  -a single integer representing the amount of digits to be rotated, ststrting from the end

Output:
  -Integer of multiple digits with the digits rotated by the input integer

Rules
  -Explicit
    -Rotating digits by just one should return the same digits
  -Implicit:
    -Return an integer

Questions?
  -Are we allowed to use the rotate method?

Test cases // Exsamples

rotate_rightmost_digits(735291, 1) == 735291
rotate_rightmost_digits(735291, 2) == 735219
rotate_rightmost_digits(735291, 3) == 735912
rotate_rightmost_digits(735291, 4) == 732915
rotate_rightmost_digits(735291, 5) == 752913
rotate_rightmost_digits(735291, 6) == 352917

data structre:
  - Integers
assisting structure:
  - Array

Algorithm
  -If rotating number is equal or less that 1 return digits
  -Take number and turn into array
  -take rotating number and make it negative * 1 save to index
  -Create an array starting from 0 to the provided index
  -Rotate the remaining numbers 
  -Join the array, covert to ingteger and return.

=end

def rotate_array(arr)
  arr.values_at(1..(arr.size - 1), 0)
end

def rotate_rightmost_digits(digits, num)
  rotate_array = digits.to_s.chars
  index = num * -1

  first_half = rotate_array.values_at(0..(index - 1))
  second_half = rotate_array.values_at(index..-1)

  rotated_digits = first_half + rotate_array(second_half)

  rotated_digits.join.to_i
end


p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917