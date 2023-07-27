```ruby
def fix(value)
  value << 'xyz'
  value = value.upcase
  value.concat('!')
end

s = 'hello'
t = fix(s)
```

`line 8` the local variable `s` is in initialized and assigned to the string object `'hello'`.

`line 9` local variable `t` is initialized and assigned to the return value of: fix method invoked with the variable `s` passed to it as an argument,.

`line 2` the `fix` method definition is given one parameter `value`. `line 3` the `<<` method is used to append the string object `'xyz'` to the variable `value`. `line 4` we se the reassignment of `value` to the return of the `upcase` method called on `value`. `line 5` the `concat` method is called on `value` with `'!'` as an argument.

The variable `s` is now pointing to `"helloxyz"` as the `fix` method mutated by using the `<<` method on `line 4`. The `t` method is now been assigned to `"HELLOXYZ!"`. This demonstrates a mutating method in ruby.