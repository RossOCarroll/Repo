=begin
  
Problem: Find Second Maximum Number
Write a method second_max that takes an array of integers as input and returns the second maximum number in 
the array.


Algorithm:
  -find the max number in the array
    -remove that number
  -Return the new max from the array

=end

def second_max(nums)

  new_array = []
  nums.each {|num| new_array << num if num != nums.max }
  new_array.max
end

# Test cases
puts second_max([1, 2, 3, 4, 5]) # Output should be 4
puts second_max([5, 4, 3, 2, 1]) # Output should be 4
puts second_max([2, 3, 1, 5, 4]) # Output should be 4