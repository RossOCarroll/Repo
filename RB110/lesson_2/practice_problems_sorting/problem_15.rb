arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

new_array = 
  arr.select do |hash|
    hash.all? do |key, value|
      value.all? {|element| element.even?}

    end
    

  end






p new_array