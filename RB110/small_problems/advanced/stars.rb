=begin

Write a method that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an 
argument to the method. The smallest such star you need to handle is a 7x7 grid.

-input
  -an odd integer

-Output:  
  -A n x n grid that reprents a started grid with white spaces and '*'

Explicit:
  -THE INPUT NUMBER WILL ALWAYS BE ODD

test cases // exsamples:

star(7)

*  *  *
 * * *
  ***
*******
  ***
 * * * 
*  *  *
Copy Code
star(9)

*   *   *
 *  *  *
  * * *
   ***
*********
   ***   
  * * *
 *  *  *
*   *   *

Data Structure:
  -integers

Assisting structure:
  -An array

Algorithm:
  -Set a star vaiable and a whitespace vairable
  -White space is the input number - 3
  -Stars number is always 3
  -

=end


def star(num)
  star_map = []
  1.upto(num) {|line| star_map << ['*' * num]}

  star = '*'
  whitespace = ' '

  star_map.map! do |ele|
    ele.map {|line| line.chars }.flatten
  end

  star_map.each {|line| puts line}


  
end


p star(7)