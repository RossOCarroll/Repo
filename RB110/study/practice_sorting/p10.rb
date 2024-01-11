arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

new_arr = 
arr.map do |element| 
  element.transform_values {|num| num + 1}
end

p new_arr
