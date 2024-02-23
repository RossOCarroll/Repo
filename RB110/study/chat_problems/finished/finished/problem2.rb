=begin

# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.


input:
  -An array of integers

ouput:
  -An integer representing the minimum sum of five consecutive integers

Rules
  Explicit
    -Sum of integers are consecutive
    -If input array is less then 5 elements return nil


# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".

Data Structure:
  -Arrays
  -Integers

Algorithm:
  -If input array is less then 5 elements return nil
  -starting index at 0
  -ending index at 4
  -Create a minimum sum from index 0 to index 4
  -Loop until ending index equals array size
    -Splice the array from starting index to ending index
    -Take the sum 
      -reassign minimum sum if the current sum is less then the minimum sum
    -increment start and end index
  -Return minimum sum

=end

def minimum_sum(input_array)
  return nil if input_array.size < 5
  start = 0
  ending = 4

  minimum_sum = input_array[0..4].sum

  until ending >= input_array.size
    sum = input_array[start..ending].sum
    minimum_sum = sum if sum < minimum_sum
    start += 1
    ending += 1
  end
  minimum_sum
end


p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) #== 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10
