=begin

Write a method that computes the difference between the square of the sum of the first n 
positive integers and the sum of the squares of the first n positive integers.

Examples:

Copy Code
sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sum_square_difference(10) == 2640
sum_square_difference(1) == 0
sum_square_difference(100) == 25164150

Input: 
  -integer

Ouput:
  -An integer that is the differnce between the squared sum and the squr

Algorithm:
  -Create an array from 1 up to the input number
  -Calculate the sum of the array and square that number
  -Iterate over the array squareing every number and calculating the sum
  -Get the diffence between the two numbers and return result

=end

def sum_square_difference(num)
  array = (1..num).to_a

  sum_square = array.sum ** 2
  square_sum = array.map {|number| number ** 2}.sum

  sum_square - square_sum
end



p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150