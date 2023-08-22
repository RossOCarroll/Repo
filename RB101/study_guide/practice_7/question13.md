```ruby
def test(str)
  str += '?'
  str.downcase!
end

test_str = "Written Assessment"
test(test_str)

puts test_str
```

`line 7` the local variable `test_str` is initialized and assigned to the string object `"Written Assement"`. 

`line 8` the test method is invoked and the local variable `test_str` is passed in as an argument. 

`line 2` through `line 5` is the method definition for `test`, it is given one parameter `str`.

`line 3` the local varable `str` is being reassigned using the `+=` method, which is Rubys syntactical sugar for `str = str + "?"`.

`line 4` the destructive `downcase!` method is called on `str`.

`line 10` when the `puts` method is called on the local variable `test_str` it will output the string object `"Written Assesment"`. The `test` method does not mutate the value `test_str` beacuse of the reassignment that happens on line 3. This demonstrates in Ruby the concept of variables as pointers.