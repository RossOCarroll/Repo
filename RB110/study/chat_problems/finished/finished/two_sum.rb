=begin

Two Sum: Write a Ruby method that takes an array of integers nums and an integer target, and returns the indices 
of the two numbers such that they add up to target. You may assume that each input would have exactly one 
solution, and you may not use the same element twice. You can return the answer in any order.

Input:
  -An array of integers and a target integer

Output:
  -An array of the indices of the two integers in the input array that their sum equals the target number

Rules:
  -Each input will have easacly one solution
  -May not use the same element twice
  -May return answer in any order

Data Structure:
  -Arrays
  -Integers

Algorithm:
  -Set a reuslt array
  -Iterate over the input array with index
    -For each element in the input array iterate over the input array again with index
      -If num1 and num2 equal the target number
        -Assign the indices to the result array


=end


def two_sum(nums, target)
  result_array = []

  nums.each_with_index do |num1, idx1|
    nums.each_with_index do |num2, idx2|
      next if idx1 == idx2
      if num1 + num2 == target
        result_array = [idx1, idx2]
      end
    end
  end
  result_array
end

# Test cases
p two_sum([2, 7, 11, 15], 9) # Expected output: [0, 1]
p two_sum([3, 2, 4], 6) # Expected output: [1, 2]
p two_sum([3, 3], 6) # Expected output: [0, 1]