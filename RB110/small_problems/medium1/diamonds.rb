=begin

Write a method that displays a 4-pointed diamond in an n x n grid, where n is an odd 
integer that is supplied as an argument to the method. You may assume that the argument 
will always be an odd integer.

Input:
  -An integer

Output:
  -Display a four pointed diamond in a n x n grid

Rules:
  Explicit requirments:
    -intput integer will always be a n odd number
  Implicit:
    -Display the diamond as a '*' symbol

  Ouestions?
    -Are there whitespace above and below the grid?

Test cases / Exsamples:

diamond(1)

*

diamond(3)

 *
***
 *

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

data structure:
  -integers
  -arrays

algorithm:
  -create a grid that is input integer by input integer
  -Save a '*' (star)
  -Save a ' ' (whitespace)
  -create a print array
    -Save pattern starting with 1 star surrounded by white spaces
  -loop n number of times
    -puts print array
    -change print array by add 2 stars and substracting 2 white spaces
    -when print array as only stars reverse the process
  -end loop

=end

def star_line(star, space)
  line = (' ' * space) + ('*' * star) + (' ' * space)
  line
end

def diamond(num)
  star = 1
  space = num / 2
  top_half = space + 1
  bottom_half = space

  top_half.times do
    puts star_line(star, space)
    star += 2
    space -= 1
  end

  star -= 2
  space += 1

  4.times do
    star -= 2
    space += 1
    puts star_line(star, space)
  end
end

diamond(9)


