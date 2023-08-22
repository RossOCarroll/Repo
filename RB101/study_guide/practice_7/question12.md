```ruby
def amethod(param)
  param += " universe"
  param << " world"
end

str = "hello"
amethod(str)

p(str)
```

`line 7` the local variable `str` is initialized and assigned to the string object `"hello"`.

`line 8` the `amethod` is invoked and the local variable `str` is passed to it as an argument. 

`line 2` through `line 5` is the `amethod` definition and it is given one parameter `param`. `line 3` we see reassigment of `param` using `+=` method essinatally that is rubys syntactical sugar for `param = param + " universe"`. `line 4` the `param` is being appended by `" world"` using the destructive `<<` double sovel method. 

When the `p` method is called on the local variable `str` on `line 10` the code will output the string "hello". Because of the reassigment on `line 3` `str` and `param` are pointing at diffect objects. This demostrates varaibles as pointers in ruby.

