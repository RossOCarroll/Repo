arr = [[2], [3, 5, 7, 12], [9], [11, 13, 15]]


new_arr =
arr.map do |array|
  array.reject {|num| num % 3 != 0}
end

p new_arr