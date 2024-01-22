=begin
# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.

Input:
  -an array of integers

Ouput:
  -an integer representing the minimum sum of five consecutive integers

Rules:
  Explicit:
    -If the array contians less then five elements return nil
    -Min sum should be from consecutive numbers
  Implicit:

Questions?


# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".

Data Structure:
  -array
  -integers

Algorithm
  -Set a min_sum varable to an empty array
  -Set an end of sub array to 5 
  -set an start index to 0
  -loop
    -Set a sub_array variable to slice the input array starting from index start index to end index
    -Take sum for sub array append to min_sum
    -increment start and end by one
    -Break if input array size is equal to end index
  -Return min from min_sum array


=end

def minimum_sum(array)
  return nil if array.size < 5
  min_sum = []
  ending_index = 4
  starting_index = 0

  while ending_index <  array.size
    sub_array = array[starting_index..ending_index]
    ending_index += 1
    starting_index += 1
    min_sum << sub_array.sum
  end
  min_sum.min
end

p minimum_sum([1, 2, 3, 4]) #== nil
p minimum_sum([1, 2, 3, 4, 5, 6]) #== 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) #== 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) #== -10