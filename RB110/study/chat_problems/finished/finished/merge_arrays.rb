=begin

Problem: Merge Sorted Arrays
Write a method merge_sorted_arrays that takes two sorted arrays of integers as input and merges them into a 
single sorted array.



algorithm:
  -Iterate through the second array
    -appending each element to the first array
  -sort and return

=end




def merge_sorted_arrays(arr1, arr2)
  arr2.each do |num|
    arr1 << num
  end
  arr1.sort
end

# Test cases
p merge_sorted_arrays([1, 3, 5], [2, 4, 6]) # Output should be [1, 2, 3, 4, 5, 6]
p merge_sorted_arrays([1, 2, 3], [4, 5, 6]) # Output should be [1, 2, 3, 4, 5, 6]
p merge_sorted_arrays([1, 4, 6], [2, 3, 5]) # Output should be [1, 2, 3, 4, 5, 6]