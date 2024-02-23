=begin


Problem: Container With Most Water
Given n non-negative integers height representing the height of each vertical line at position i, write a method 
max_area that returns the maximum area of water that can be contained (i.e., the area formed between the vertical 
  lines) by choosing two lines such that the distance between them is the furthest and the height of the shorter 
  line is the minimum among all choices of such pairs.





def max_area(height)
  # Your code here
end

# Test cases
puts max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) # Output should be 49
puts max_area([4, 3, 2, 1, 4]) # Output should be 16
puts max_area([1, 2, 1]) # Output should be 2