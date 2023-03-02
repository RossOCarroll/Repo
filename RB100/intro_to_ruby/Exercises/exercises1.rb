

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
odd_arr = []
  array.select do |num| 
    if num % 2 == 1 
      odd_arr << num
    end
end

p odd_arr