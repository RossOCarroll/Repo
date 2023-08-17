def last_element(arr)
  x = arr[-1]
  return x
end

arr = [1, 5, 3, 7]

puts last_element(arr) == 7 #=> true
puts arr == [1, 5, 3, 7] #=> false

arr_1 = ['Hi', 'hello', 'YO']
arr_2 = [45, 9, 10, 22, 77, 8, 8]

puts last_element(arr_1) == 'YO' #=> true
arr_1 == ['Hi', 'hello', 'YO'] #=> true
puts last_element(arr_2) == 8 #=> true
arr_2 == [45, 9, 10, 22, 77, 8, 8] #=> true