```ruby
def merge(array_1, array_2)
  array_1 | array_2
end

arr1, arr2 = ['hello'], ['hello', 'world']
merged = merge(arr1, arr2)
merged[0][0] = 'J'
p merged
p arr1
p arr2
```

`line 6` teo local variables `arr1` and `arr2` are initialized and assinged each an array collection on strings. `['hello], ['hello', 'world']`.


`line 2` through `line 4` is the method definition for merge it is given two parameters `array_1` and `array_2`. `line 3` the `|` operator is called with `array_1` and `array_2` as operands. The `|` will return a new array of unique values. 

`line 7` the local variable `mered` is intialized and assigned to the return value on the `merge` method that is given two arguments `arr1 , arr2`. The `merge` method will return `['hello', 'world']`.

`line 8` the index reassigment method is used to reassign at index `[0][0]` to `J`. This is a destructive method and will reassign the first element in the array at index `[0]` so now the `merged` varable is pointing to `['Jello', 'World']`. This is what is output on `line 9`. 

`line 10` will output `['Jello']` when the `p` method is called on `arr1` as the indexted reassignment methos was used on `line 8`.

`line 11` will output `['hello', 'world']` when the `p` method is called on `arr2`

