=begin
# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.

Input:  
  -An array of numbers
Ouput:
  -An array of numbers representing how many numbers in the input array are smaller then every number in the input array

Rules:
  Explicit:
    -Only count the unique values
  Implicit:
    -Return an array on integers
    -If input is an array with a single integer, should return an array with a single integer
    -Output srrsy should have the same amount of elements as the input array
  Ouestions:
    -Do we include the current number as being smaller number?

# Examples:

# p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
# p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4])
#                             == [0, 2, 4, 5, 6, 1, 2, 3, 2]
# p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
# p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
# p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".

Data Structure:
  -arrays

Algorithm:
  -Set a result array
  -Set a counter to 0
  -Iterate over the input array
    -For each number in input array iterate over input array
      -next if number equals numeber in iteration
      -if current number is less then increment counter by 1
      -append counter to result array
  -Return result array
=end

def smaller_numbers_than_current(array)
  result_array = []

  array.each do |num|
    counter = 0
    array.uniq.each do |num2|
      if num == num2
        next 
      elsif num > num2
        counter += 1
      end
    end
    result_array << counter
  end
  result_array
end


p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

