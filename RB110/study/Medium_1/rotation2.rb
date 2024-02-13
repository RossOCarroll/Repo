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
  -A number and a integer 'n' from the last 

Ouput:
  -The input number rotated from the 'n' from the end of the number

Algorithm
  -Convert the input number to a string
  -Convert 'n' into it negative
  -Set a not-rotated varaible to the return val;ue of
    -Slice the input number from index 0 to 'n' - 1
  -Set a rotated variable to the return
    -slice the input string from 'n' to -1

=end


def rotate(string)
  rotated = string[1..-1] + string[0]
end


def rotate_rightmost_digits(number, n)
  rotate_index = n * -1
  number_string = number.to_s

  non_rotated = number_string[0..(rotate_index - 1)]
  rotated = rotate(number_string[rotate_index..-1])

  result = (non_rotated + rotated).to_i


end

p rotate_rightmost_digits(735291, 1) #== 735291
p rotate_rightmost_digits(735291, 2) #== 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917