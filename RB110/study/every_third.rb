def every_third(array, start)
  result = []
  while start < array.size 
    result << array[start]
    start += 3
  end
  result
end

arr = [1, 2, 3, [], 'a', 'b', 'c', 'd', 'e']

p every_third(arr, 3)