```ruby
def test(b)
  b.map {|letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)
```
This code will return `["I like the letter: a", "I like the letter: b", "I like the letter: c"]`. 

`line 6` the local variable `a` is initialized and assigned to the array `['a', 'b', 'c']`. 

`line 7` the test method is invoked and with the variable `a` passed as an agument

`line 2` we see `test` method definition given a paramater `b`. `line 3` the `map` method is called on `b` and given a block as an argument. Within that block we have the parameter `|letter|` then the string `"I like the letter: #{letter}"`. The map method will iterate through each element in the array and return a new array. And using string interpolation we see the `test` method return `["I like the letter: a", "I like the letter: b", "I like the letter: c"]`.

This code illustrates rubys cocept of object passing and variables as pointers.