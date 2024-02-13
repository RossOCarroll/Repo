=begin

Write a method that displays a 4-pointed diamond in an n x n grid, where n is an odd integer 
that is supplied as an argument to the method. You may assume that the argument will always 
be an odd integer.

Examples

Copy Code
diamond(1)

*
Copy Code
diamond(3)

 *
***
 *
Copy Code
diamond(9)

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


Input:  
  -Integer

Output
  -Display a 4 pointed diamond using the string '*'

Explicit:
  -Assume the argument will always be an odd number

Data struture
  -Integer
  -Strings

Assiting structure:
  -Array

Algorithm:
  -Set a white space variable to ' '
  -Set a star variable to the string '*'
  -Take the input number / 2  that will be our starting line
  -loop num times
    -Put string whitespace times (starting line) + star + whitespace (starting line)
    -Put string minus white spaces by 1 + star by * 2 + white space


=end

def diamond(num)
  whitespace = ' '
  star = '*'

  starting_point = num / 2
  star_times = 1

  ((num / 2) + 1).times do
    puts (whitespace * starting_point) + (star * star_times) + (whitespace * starting_point)
    starting_point -= 1
    star_times += 2

  end

  starting_point = 1
  star_times = num - 2

  (num / 2).times do
    puts (whitespace * starting_point) + (star * star_times) + (whitespace * starting_point)
    starting_point += 1
    star_times -= 2

  end
end


diamond(103)

    