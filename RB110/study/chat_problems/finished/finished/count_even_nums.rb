=begin

Problem: Count Even Numbers
Write a method count_even that takes an array of integers as input and returns the count of even numbers in the 
array.


algorithm:
  -Create an even nums array
  -Iterate over the input array
    -if current number is even
      -append to even_nums array
  -Return the size of even nums array

=end



def count_even(nums)
  even_nums = []

  nums.each do |num|
    even_nums << num if num.even?
  end
  even_nums.size
end

# Test cases
puts count_even([1, 2, 3, 4, 5]) # Output should be 2
puts count_even([2, 4, 6, 8, 10]) # Output should be 5
puts count_even([1, 3, 5, 7, 9]) # Output should be 0