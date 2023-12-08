=begin

Write a method that computes the difference between the square of the sum of 
the first n positive integers and the sum of the squares of the first n positive integers.

-input
  -Integer

-Output:
  -an integer representing the the sum square subtracted by the square sum

Rules:
  Explicit :
    -expect the input to be a positive integer
  Implicit
    -

Test Cases /  Exsamples:
  -sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sum_square_difference(10) == 2640
sum_square_difference(1) == 0
sum_square_difference(100) == 25164150


data Structure:
  -integers
Assisiting:
  -Array

Algorithm:
  -from the input integer creat an array of increment integers starting from 1 up to input array
  -iterate over array
    -To calculate the sum square.. all elements in the array summed and squared
    -Save to sum_square
  -iterate iver array
    -To calculate Square sum.. all elements squared and summed together
    -Save resuled as square sum
  -substract the sum square by the square sum

=end

def sum_square_difference(num)
  array = []
  1.upto(num) {|ele| array << ele }

  sum_square = array.reduce(:+)**2

  square_sum = array.map {|ele| ele ** 2}.sum

  sum_square - square_sum
end

p sum_square_difference(3) #== 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) #== 2640
p sum_square_difference(1) #== 0
p sum_square_difference(100) #== 25164150

