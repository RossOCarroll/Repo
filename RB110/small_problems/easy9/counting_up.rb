=begin
Write a method that takes an integer argument, and returns an Array of all integers, 
in sequence, between 1 and the argument.

You may assume that the argument will always be a valid integer that is greater than 0.


Input:
  -integer

Ouput:
  -array of integers in sequence leading up to the input integer

Explicit requirments:
  - Assume argument will be a valid integer greater than 0

Ouestions
  -Empty input?

Test cases // exsamples:

sequence(5) == [1, 2, 3, 4, 5]
sequence(3) == [1, 2, 3]
sequence(1) == [1]

Data Structure:
  -Integer 
  -Arrays

Algorthim
  -Set an result array to an empty array
  -from 1 upto input integer
    -append number to result array
  -return array

=end

def sequence(number)
  result_array = []

  1.upto(number) do |num|
    result_array << num
  end

  result_array

end

#Further Exploration

def sequence2(number)
  number.positive? ? Array(number..1).reverse : sequence(number)

end

p sequence2(-10)

p sequence(5) #== [1, 2, 3, 4, 5]
p sequence(3) #== [1, 2, 3]
p sequence(1) == [1]