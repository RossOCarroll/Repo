```ruby
a = 10
​
while true do
  c = a
  break
end
​
puts c
```

`line 2` the local variable `a` is initialized and assigned to the integer `10`.

`line 4` a while loop is implemented asking while `true` and a `do..end` structure is passed as an argument. Because while loops are not implemented as a method it does not create an inner scope. 

`line 5` local variable `c` is initialized and assigned to the value on `a`, variable `c` is now pointing at the integer `10`. 

`line 6` a `break` statment taking us out of the `while` `loop`. 

The `puts` method is then called on `c` on `line 9` this will output `10` and return `nil`. This code demontrats Rubys local variable scoping rules as we were able to access the local variable `c` because the `while` `loop` is not implemented as a method there is no inner scope just the main scope.