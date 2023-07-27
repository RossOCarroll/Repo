```ruby
def amethod(param)
  param += " universe"
  param << " world"
end

str = "hello"
amethod(str)

p(str)
```

this code will output the string `"hello"` and return the string `"hello"`.

On `line 7` the local variable `str` is initialized and assigned to the string object `"hello"`.

`line 8` `amethod` method is invoked and `str` is passed to it as an argument. 

`line 2` through `line 5` is the method definition for `amethod` and it is given a parameter `param`. `line 3` we have the variable `param` being reassigned using the `+=` operator to `param + "universe"`. `line 4` `param` is being oppended using the `<<` method to the string object `" world"`. 

`line 10` when the `p` method is called on the local variable `str` this will output the string object `'hello'`. The `amethod` is a non mutating method beacuse of the reassignment of `param` on `line 3`. `param` is now pointing at a new object `line 4` `param` is oppended by `' universe'` using the mutating method `<<` demonstrating rubys concept of variables as pointers.