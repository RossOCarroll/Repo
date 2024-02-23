=begin

Problem: Largest Sum Contiguous Subarray
Write a method max_subarray_sum that takes an array of integers as input and returns the largest sum of 
contiguous subarray within the given array.

-input
  -an array of integers

-Output
  -the maximum sum of a continious sub array

Implicit:
  -input array may have negative numbers

Querstions
  -Does a single element array count as sub array


Algorithm:
  -Creat every continguious sub array from the input array
    -From 1 to the length of the array - 1
      -From the start index to the length of the array - 1
        -Splice the array from the start index to the ending index
  -Result should be an array of arrays
  -Map over the nested array gathering the sum of all arrays
  -Return the max value in array

=end



def max_subarray_sum(nums)
  sub_arrays = []

  (0..nums.length - 1).each do |start_index|
    (start_index..nums.length - 1).each do |end_index|
     sub_arrays << nums[start_index..end_index].sum
    end
  end
  sub_arrays.max
end

# Test cases
p max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) # Output should be 6
p max_subarray_sum([-2, -5, 6, -2, -3, 1, 5, -6]) # Output should be 7
p max_subarray_sum([-1, -2, -3, -4, -5]) # Output should be -1