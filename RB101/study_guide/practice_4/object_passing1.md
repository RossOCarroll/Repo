```ruby
def change_name(name)
  name = 'bob'      # does this reassignment change the object outside the method?
end

name = 'jim'
change_name(name)
puts name 
```
This code will output the string object `'jim'` and return `nil`.

`line 6` the local variable `name` is initialized and assigned to string object `'jim'`.

`line 7` the `change_name` method is invoked and the `name` variable is passed to it as an argument.

`line 2` Method definition for `change_name` is given one parameter `name`. `line 3` we see reassignment for the local variable `name` to the string object `'bob'`. 

This reassignment on `line 2` does not change the `name` object outside of the method. This illustrates ruby's pass by value behavior as well as concept of object passing. 