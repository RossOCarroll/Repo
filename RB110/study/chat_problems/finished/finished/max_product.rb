=begin

Problem: Find Maximum Product of Subarray
Write a method max_product_subarray that takes an array of integers as input and returns the maximum product of 
any contiguous subarray of the given array.

input:
  -An array of integers

Output:
  -An integer representing the maximum product from all sub arrays

Algorithm:
  -Find all contiguous sub arrays within the input array
    -Iterate over input array with index
      -create a ending index
        -Splice the array from the start index to the ending index
          -get the product of each sub string
            -append to array
  -Return max element in array

=end


def find_subarrays(array)
  sub_arrays = []

  (0..array.length - 1).each do |start_index|
    (start_index..array.length - 1).each do |end_index|
      sub_arrays << array[start_index..end_index].reduce(:*)
    end

  end
  sub_arrays
end


def max_product_subarray(nums)
  find_subarrays(nums).max
end

# Test cases
p max_product_subarray([2, 3, -2, 4]) #== 6
p max_product_subarray([-2, 0, -1]) == 0
p max_product_subarray([-2, -3, 4, -1, -2, 1, 5, -3]) #== 120