arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

new_hsh = {}
new_arr = []

arr.each do |hash|
  hash.each do |key, value| 
    new_hsh[key] = value if value.all? {|num| num.even? }
  end
end

p new_arr << new_hsh