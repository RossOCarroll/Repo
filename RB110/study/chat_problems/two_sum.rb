=begin

Problem: Two Sum
Write a method two_sum that takes an array of integers nums and an integer target as input and returns indices of 
the two numbers such that they add up to target.

input:
  -an array of integers
  -Target number

Output: 
  -The indicies of two of the array integers that when summed equal the target in an array

Questions
  -Does the order of the return array matter?
  -Will there always be 2 integers that equal the target?


Algorithm:
  -Iterate over the input array with index
    -For each element Iterate over array  with index
      -Get the sum of num 1 and num 2
        -If sum equals the target number
          -Return the indicies in an array

=end




def two_sum(nums, target)
  result_array = []

  nums.each_with_index do |num1, index1|
    nums.each_with_index do |num2, index2|
      next if index1 == index2
      result_array = [index2, index1] if num1 + num2 == target
    end
  end
  result_array
end

# Test cases
p two_sum([2, 7, 11, 15], 9) # Output should be [0, 1]
p two_sum([3, 2, 4], 6) # Output should be [1, 2]
p two_sum([3, 3], 6) # Output should be [0, 1]