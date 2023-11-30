=begin
Create a method that takes two integers as arguments. The first argument is a count, and 
the second is the first number of a sequence that your method will create. The method should 
return an Array that contains the same number of elements as the count argument, while the 
values of each element will be multiples of the starting number.

You may assume that the count argument will always have a value of 0 or greater, while 
the starting number can be any integer value. If the count is 0, an empty list should be 
returned.

input:
  -Two integers the first is a count and the second is the first number in the sequence

Output:
  -Array that cointians the same number of element as the count, while the values will be 
  multiples multiples of the starting number

Explicit:
  -Assume that the count value will be greater than 0
  -Starting number can be an integer of any value

Test cases / exsamples:

sequence(5, 1) == [1, 2, 3, 4, 5]
sequence(4, -7) == [-7, -14, -21, -28]
sequence(3, 0) == [0, 0, 0]
sequence(0, 1000000) == []

Data Structure
  -integer
  -Array

Algorithm:
  -Set a counter number to 1
  -Set a result array to an empty array
  -From 1 upto the count
    -Times the counter by first number
    -append to result array
    -Increment counter
  -Return result array

=end

def sequence(count, first_num)
  result_array = []
  counter = 1

  1.upto(count) do |_|
    result_array << counter * first_num
    counter += 1
  end

  result_array
end



p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []