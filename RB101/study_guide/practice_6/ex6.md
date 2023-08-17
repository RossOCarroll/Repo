```ruby
def test(b)
  b.map {|letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)
```

`line 6` the local variable `a` ia initalized and assigned to the array collection `['a', 'b', 'c']`. 

`line 7` the `test` method is invoked and the vasriable `a` is passed to it as an argument.

`line 2 - 4` we se the method definition for the `test` and it is given one parameter `b`.

`line 3` the `map` method is called on `b` and it is given a block as an argument. Whith in the block we have the paramater `|letter|`. Using string interpolation  the parameter `letter` will be added to the string `"I like the letter: #{letter}"`. The `map` method will iterate through the array object `['a', 'b', 'c']` passing to the block adding each object to the string.

