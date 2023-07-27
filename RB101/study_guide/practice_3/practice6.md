```ruby
words = %w(jump trip laugh run talk)

new_array = words.map do |word|
  word.start_with?("t")
end

p new_array
```
On `line 8` the `p` method called on the local varible `new_array` will output `
[false, true, false, false, true]` and return the same. 

`line 2` we have the `words` variable initialized and assigned to the array `[jump, trip. laugh, run, talk]`. On `line 4` we have locl variable `new_array` initialized and assigned to the ruturn value on the `map` method invoked on the `words` array. 

following the map method, a `do..end` block is passed to it as an argument. Whithin the `do..end` block there is a `|word|` parameter. `line 5` the `start_with?` method is called on `word` with `"t"` passed as an argument. This will iterate through the array `words` and return `true` or `false` if each element in the `words` array starts with the letter `"t"`.

This demostrate rubys concept of truthiness and also the uses of the `start_with?` method.