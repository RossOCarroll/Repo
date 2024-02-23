=begin


=end

def find_common_elements(arr1, arr2)
  common_elements = []

  arr1.each do |num|
    common_elements << num if arr2.include?(num)
  end
  common_elements
end

# Test cases
p find_common_elements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]) # Output should be [4, 5]
p find_common_elements([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) # Output should be []
p find_common_elements([1, 2, 3], [1, 2, 3]) # Output should be [1, 2, 3]