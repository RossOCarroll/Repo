```ruby
array = [1, 2, 3, 4, 5]

array.select do |num|
   puts num if num.odd?
end
```
On `line 2` the local variable `array` is intialized and assigned to the array collection `[1, 2, 3, 4, 5]`. `line 3` the `select` method is called on the `array` variable. The `select` method is given a block as an argument on `lines 3 -4`, the   block is given a paramenter `num`. `line 5` the `puts` method is called on `num` and then a conditional `if` statement. Followed by the the `odd?` method called on `num`.

This code will will output an empty array. The `select` method cares about the truthiness of the return value of the block. In this case the block is returning `nil` as the `puts` method always returns `nil`. This code demontrates the concept truthiness.

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.select { |n| n.odd? }
```

On `line 1` the local variable `arr` is initialized and assigned to the `array` collection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. Om qline 3 the `select` method is called on `arr` and is given a block using `{..}`. The block is given paramenter `n`, then the `odd?` method is called on `n`.

The `select` will iterate through the `arr` array passing it to the block. The block then return `true` or false depending on weather the element is odd or not. The select menthod preforms selection and returns the array `[1, 3, 5, 7, 9]`. This code demonstartes the concept of truthiness as the `select` method cares about the `truthiness` of the blocks return value.

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.select do |n| 
  n + 1
end
p new_array
```

On `line 1` the local variable `arr` is initialized and assinged to the `array` collection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `line 3` the local variable `new_array` is initialized and assigned to the return value of: the `select` method is called on the `arr` array and is given a `do..end` block as an argment. The block is given a parameter `n`. `line4 ` we see `n` is incremented by the integer `1` using the `+` operator.

This code will output the array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. This is because `select` cares about the trutiness of the blocks return value. The Last line of code in the block is `n + 1` and this will ways return a truthy value. `select` preforms slection on the array depending on the block return value. This code demonstrates the concept of truthiness.

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.select do |n| 
  n + 1
  puts n
end
p new_array
```

`line 1` the local variable `arr` is initialized and assigned to the array collection '`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `line 3` the local variable `new_rray` is intialized and assigned to the return value of: the `select` method is called on `arr` and is given a `do..end` block as an argment. The block is given a paramenter `n` representing each element in the `arr` array. `line 4` we see `n` being incremented by the integer `1` using the `+` method. `line 5` the `puts` method is called on `n`.

This code will output each element in the `arr` array. Then on `line 7` the `p` called on `new_array` will output an empty array.  `select` preforms selection based on the truthiness of the blocks return value and returns a new array. The return value of the block is the last line of code which is `puts` called on `n` which is `nil`. In every iteration the return value is `nil` therefore no elements are selected. This demontrates the concept of truthiness.

```ruby
words = %w(jump trip laugh run talk)

new_array = words.map do |word|
  word.start_with?("t")
end

p new_array
```
On `line 1` the loccal variable `words` is intialized and assigned to the array `%w(jump trip laugh run talk)`. `line 3` the local variable `new_array` is initialized and assigned to the return value of: The `map` method called on the `words` array, it is given `do..end` block and a parameter `word`. `line 4` the `start_with?` method is called on `word` and is given the argument `'t`. `line 7` the `p` is called on `new_array`, this will ouput '[false, true, false, false, true]'.

the `map` method  preforms transformation based on the return value of the block and returns a new array. The returen vaslue of the block is either `true` or `false` depending on weather the element starts with `'t'`. This is why we see an array of booleans. 


```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.each { |n| puts n }
```

`Line 1` the local variable `arr` is intialized and assigned to the array collection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `linr 3` the `each` is called on `arr` array and is given a bleck `{...}`. The block has a parameter `n` which acts as an alies for each element in the array. The `puts` method is then called on `n`.

The `each` method will iterate through the array passing each element to the block and then returns the orginal collection. When `puts` is called on the `n` it will ouput each element in the array and return `nil`. This demontrates how the each method works and returns the orginal object its called on. 

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

incremented = arr.map do |n| 
            n + 1
            end
p incremented
```

`line 1` the local variable `arr` is in tialized and assigned to the array collection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `line 3` the local variable `incremented` is intialized and assigned to the return value of: The map method is called on the `arr` variable, it is given a `do..end` block as an argument and one parameter `n` which acts as an alies for each element in the iteration. `line 4` n is being incremented by the integer `1` using the `+` operator. `line 7` the `p` method is called the `incremented` variable.

This code will output `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11] `. this is because the `map` method preforms transformation based on the return value of the block. The blocks return value of every iteration is `n + 1`. This demonstrate how the `map` works and preforms transformation.

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.map do |n| 
  n > 1
end
p new_array
```

`line 1` the local variable `arr` is initialized and assigned to the array colection `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `line 3` the local variable `new_array` is initialized and assigned to the return value of: The `map` method is called on the `arr` array and given `do..end` block with a parameter `n` that asts as an alies for each element in the array. `line 4` we `n` and the comparison operator `>` with the integer `1`. The return value of the comparison will be a boolean `true` or `false` depending on wheater the element is greater than `1`. 

the `map` method preform transformation depending on the return value of the block and returns a new array. In this case the return value is an array of booleans. This demontrates the `map` method and how it works with blocks.

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.map do |n| 
  n > 1
  puts n
end
p new_array
```

`line 1 ` the local variable `arr` is initialized and assigned to an array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. `line 3` the local variable `new_array` is in itialized and assigned to the return value of : The `map` method called on the `arr` array it is given a `do...end` block with one parameter `n` that acts as an alies for each element in the array.   line 4 
we see the comparison `n > 1` which is ignored. `line 5` the `puts` method is called on `n` this will output each element in the array and will also return `nil`.

The `map` preforms transformation depending on the return value of the block and returns a new array. The last line of code `puts n` returns `nil` making the return value of the block an array of `nils`. This array of `nils` is saved to the `new_array` variable. This code demotrates the `map` method and how it preforms transformation depending on the return value of the block.

```ruby
a = "hello"

[1, 2, 3].map { |num| a }
```

On `line 1` the local variable `a` is initialized and assigned to the string object `"hello"`. `line 3` the `map` method is called on the array `[1, 2, 3]`. The `map` method is given a block `{..}` as an argument and a parameter `num` which represents each element in the array. We then have the variable `a` that has the calue of `"hello"`. `"hello"` will get returned and used by the block. The `map` method preforms transformation based on the return value of the block and returns a new array. In this case `map` will return `["hello", "hello", "hello"]`. This code demontrates the `map` method and how it uses the return value iof the block to preform tranformation.

```ruby
[1, 2, 3].each do |num|
  puts num
end
```

`line 1` the `each` method is called on the array `[1, 2, 3]`. The `each` method is given a block as an argument and a parmeter `num` that acts as an alies for each element in the iteration. `line 2` the `puts` method is called on `num`, this will output each element in the array and also return `nil`. The return value of the block for each iteration will then be `nil`. The `each` method does not care about the return value of the block and returns the orginal collection `[1, 2, 3]`. This code demonstrates how the `each` method works as its function is to iterate and returns the orginal collection.




```ruby
[1, 2, 3].any? do |num|
  num > 2
end
```
On `line` 1 the `any?` method is called on the array collection `[1, 2, 3]`. The `any?` methos is given a `do..end` block with a parameter `num` on `lines 1 - 3`. `line 2` We see a comparison operater checking if `num` is greater than: `num > 2` . The return value of this comparison which will be a boolean will be used by the block and the return value of the block will be used by the `all?` method. 

`any?` looks at the truthiness of the blocks return value. If any the elements in the array return `true` when sent to the block the method returns `true`.

```ruby
{ a: "ant", b: "bear", c: "cat" }.any? do |key, value|
  value.size > 4
end

```

On `line 1` the `any?` method is called on the hash object `{ a: "ant", b: "bear", c: "cat" }`. the method is given a `do..end` block as an argument with two parameters `key` and `value` acting as alieies for each key value pair in the hash. `line 2` the `size` method is called on `value` returning the size of the value strings in the hash. This is compared using `>` to the integer `4`. This code will return to the block of the value in the key value pair `true` if the values' size id greater than `4` characters and `false` otherwise. That return value of the block is then used by the `any?` method to determine if any of the values are `true` or `false`. In this case there is no values that are greater then `4` and this code will return `false`.

```ruby
{ a: "ant", b: "bear", c: "cat" }.all? do |key, value|
  value.length >= 3
end
```

On `line 1` the `all?` method is called on the the hash collection `{ a: "ant", b: "bear", c: "cat" }`. The method is given a `do..end` block on `lines 1-3` with parameters `key` and `value` acting as alieses for every key value pair in the `hash`. `line 2` the `length` method is called on `value` and a comparison operator greater then or equal to `>=` , the return value of length is compared with the integer `3`. This comparison will return a `true` or `false` to the `do..end` block. The block will then return a `true` or `false` to the `all?` method. The `all?` method cases about the truthiness of the return value of the will return a `boolean` dpending on if all values in the hash have characters that are 3 or larger. In this case it will return `true`.

```ruby
[1, 2, 3].each_with_index do |num, index|
  puts "The index of #{num} is #{index}."
end
```

On `line 1` the `each_with_index` method is called on the array collection `[1, 2, 3]`. Tbe methid also has a `do..end` block form `lines 1-3` and is given two parameters `num` and `index`, `num` acts as an alies for the element in the current iteration and `index` represents the current position the element is in. `line 2` the `puts` method is called on the string object `"The index of #{num} is #{index}."`. With string interpolation the parameters `num` and `index` are inserted tot he string. The `puts` method will output this string and `num` will show as the current element and `index` will show as the position index of the element. The `puts` method return `nil` which is returned to the block. The block then returns `nil` to the method but nothing is done with this as `each_with_index` diesnt care about the block and returns the orginal collection.


```ruby
{ a: "ant", b: "bear", c: "cat" }.each_with_object([]) do |pair, array|
  array << pair.last
end
```

On `line 1` the `each_with_object` method is called on the hash collection `{ a: "ant", b: "bear", c: "cat" }`. The method is given a `do..end` block and an argument of an `array` and two parameters `pair` which is an alies for each key value pair in the hash and `array` and `array` which represents a new array being returned. `line 2` the `last` method is called on `pair` and the return value is appened to `array` using the `<<` method. `last` will append the value of each key value pair to the new array and send that to the block. The block then sends that return to the `each_with_object` method and the method will return a new array with `values` as elements.

```ruby
{ a: "ant", b: "bear", c: "cat" }.each_with_object({}) do |(key, value), hash|
  hash[value] = key
end
```
One `line 1` the `each_with_object` method is called the hash collection `{ a: "ant", b: "bear", c: "cat" }`, the method is given an agument that represents a new hash. The method also is given a `doo..end` block on `lines 1-3` with three parameters `key, value` which represents the keys and values in the hash and `hash` which represents a new hash object. `line 2` is a new assignment for the hash where the value is being assigned to the key and the vey is being assigned to the value. Each new key value is returned to the block and then returned to the method. The method will return a new hash where the keys and values are swaped from the orginal hash collection.

```ruby
odd, even = [1, 2, 3].partition do |num|
  num.odd?
end

p odd 
p even
```
On `line 1` there is a double variable assignment with first the local variable `odd` and second `even`. The assigned to the return value of: the `partition` method called on the array `[1, 2, 3]`. the method is given a `do..end` block and a parameter `num` which is alies for each element in the array during the current iteration. `line 2` the `odd?`  method is called on `num`. The `odd?` method will return a boolean `true` or `false` depending on weather the current element in the iteration is odd or not. This will be returned to the block and the block the returns this to the `partition` method. The method then returns two arrays one with the odd element and one with the even elements in arrays to the `odd` and `even` respectively. This demopstrates the concept of truthiness.



```ruby
array = [1,2,3,4,5,6,7,8,9,10]

odds = array.select do |n|
         n+1
       end 

p  odds

incremented = array.map do |n|
                n.odd?
              end 

p incremented

incremented = array.map do |n|
                n.odd?
                puts n 
              end 

p incremented
```

On `line 1` the local variable `arr` is initialized and assigned to the array collection `[1,2,3,4,5,6,7,8,9,10]`.  `linr 3` the local variable `odds` is assigned to the return value of: the `select` method called on the `array` it is given a `do..end` block as an argument and a parameter `n` representing each element in `array` during iteration. `line 4` `n` is being incremeted using the operator `+` and the integer `1`. This will return a truthy value to the block on every iteration. The block then returns those truthy values back to the `select` method preforms selection depending on the truthiness of the block. `line` 7 when the `p` is called on `odds` this will output the array `[1,2,3,4,5,6,7,8,9,10]`. This because `n + 1` will return a truthy value for every element.

`line 8` the local variable `incremeted` is initialized and assigned to the return value of:
The `map` method called on the `array` array collection. The method is given a `do..end` block as an argument on `lines 8 - 10` with a parameter `n` which is an aleis for each element in the iteration. `line 9` the `odd?` method is called on `n`. The `odd?` method will return to the block a boolean `true` or `false` depending on if the current element is odd or not. The block then returns this to the `map` which preforms transformation depending on the return value of the block. When `p` is called on `incremented` on `line 11` this will output an array of booleans.

`line 13` the local varaible `incremented` is being reasigned to the return value of: the `map` method called on `array`. The method is given a `do..end` block as an argument with a parameter `n` acting as an aleies for each element in the array. `line 14` the `odd?` method is called on `n`. `linr 14` the `puts` method called on `n` this will output all the elements in the `array` array `puts` also returns `nil` to the block. The block returns this to the `map` method, The `map` method preforms transformation depending on the return value of the block. The return value of `map` is an array of `nils`.

```ruby
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map do |arr|
  arr.select do |item|
    if item.to_s.to_i == item    # if it's an integer
      item > 13
    else
      item.size < 6
    end
  end
end
```

On `line 1` the `map` method is called on the nested array `[[8, 13, 27], ['apple', 'banana', 'cantaloupe']]`. The method is given a `do..end` block as an argument with a parameter `arr` that acts as an alies for each array in the nested array. On `line 2` the `select` method is called on `arr`, the method is given a `do..end` block and a parameter  `item` that acts as an alias for every element within the arrays. `line 3` there is an `if` conditional statment `item.to_s.to_i == item`  `to_s` converts `item` to a string then `to_i` to an integer the comparing it back to `item`, this confirms that the element is a `integer`. If true then `item` is then compared to `13` with the greater than comparrison `>`. If `item` is not an integer the `else` statement is executed `item.size < 6` the `size` method is called on `item` returning the amount of characters in the string. That is the compared using the less than `<` and the integer 6. These comparasions will return a `true` or false for each element to the inner block to then be used by `select` for selection. The `select` method will then return thos elements to the outer block which will then return those elements the the `map` method to preform transformation. The return of the `map` method is the nested array `[[27], ["apple"]]`.

```ruby
[['a', 'b'], ['c', 'd'], ['e', 'f']].map do |sub_arr|
  p sub_arr.map do |letter|
    letter.upcase
  end
end
```

On `line 1` the `map` method is called on the nested array `[['a', 'b'], ['c', 'd'], ['e', 'f']]`. The method is given a `do..end` block as an argument with a parameter `sub_arr` acting as a alias for each sub_array in the nested array. `line 2` the `map` method is called on `sub_arr` and is given a `do..end` block with one parameter `letter` which acts as a alias for each element within the sub array. `line 3` the `upcase` method is called on `letter` which will capitalize each element in the array and return it to the inner block. The inner block then returns each capatiazed element to the inner `map` method to preform transformation. The return value inner `map` method which then returns the sub array to the outer block. The outer block then returns thos sub arrays to outer `map` method to preform transformation. The return value of this code is `[["A", "B"], ["C", "D"], ["E", "F"]]`.
