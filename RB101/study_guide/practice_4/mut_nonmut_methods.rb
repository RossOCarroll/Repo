def mutating_delete(arr)
  arr.pop
  arr
end

arr = [1, 2, 3]

p mutating_delete(arr) == [1, 2] #=> true
p arr == [1, 2]   


def non_mutating_delete(arr) 
  arr[0...-1]
end

arr = ['a', 'b', 'c', 'd']

p non_mutating_delete(arr) == ['a', 'b', 'c'] #=> true
p arr == ['a', 'b', 'c', 'd']