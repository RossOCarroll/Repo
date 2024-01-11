






def zip_arrays(arr1, arr2)
  arr2.each {|num| arr1 << num}
  arr1
  
end

array1 = [1, 2, 3]
array2 = [4, 5, 6]
p zip_arrays(array1, array2) # => [1, 4, 2, 5, 3, 6]