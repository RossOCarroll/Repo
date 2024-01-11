=begin

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

input:
  -positive integer representing the number of floor in a tower
output:
  -array with stars and whit spaces

explicit requirements:
  -Return a array of strings
  -argument will be a positive number
implicit requremnts

questions?
  -will zero be used as an argument?

Data structure:
  -arrays
  -strings

Algorithm:
  -set a variable whitespace and assign ' ' 
  -set a variable star assign to '*'
  -set an tower array to empt array
  -set a incement
  -set a decrment
  -input n_floor times
    -append to tower array whitespace - 1 + star + white space - 1
    -incrment + 1
    -decrment - 1
  -return tower array

=end

WHITESPACE = ' '
STAR = '*'

def towerBuilder(n_floors)

  tower_array = []
  whitespaces = n_floors - 1
  stars = 1

  n_floors.times do 
    tower_array << (WHITESPACE * whitespaces) + (STAR * stars) + (WHITESPACE * whitespaces)
    whitespaces -= 1
    stars += 2
  end
  tower_array
end

puts towerBuilder(6)
