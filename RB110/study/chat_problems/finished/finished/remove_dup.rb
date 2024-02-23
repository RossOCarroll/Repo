=begin
  

Remove Duplicates from Sorted Array: Write a Ruby method that takes a sorted array of integers and modifies the 
array in place to remove any duplicate elements. The function should return the length of the modified array.




=end








def remove_duplicates(nums)
  nums.each_with_index do |num, index|
    next if index == 0
    nums.delete(num) if num == num[index + 1]
  end
  nums
end

# Test cases
arr1 = [1, 1, 2]
p remove_duplicates(arr1) # Expected output: 2 (arr1 becomes [1, 2])

arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
p remove_duplicates(arr2) # Expected output: 5 (arr2 becomes [0, 1, 2, 3, 4])