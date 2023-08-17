```ruby
a = 4
b = 2
​
loop do
  c = 3
  a = c
  break
end
​
puts a
puts b
```

`line 11` will output `3` instead of `4` when the `puts` method is called on the local variable `a`. This is beacuse on `line 6` local variable `c` is initialized and assigned to the integer `3` then on `line 7` local variable `a` is being reassigned to the value of `c`. Both variables `a` and `c` are pointing to the same object, the integer `3`.

The structure on `lines 4 - 8` is a `do..end` block. When the `loop` method is invoked on `line 5` and it passes a `do..end` block as an argument it creates an inner scope. The reassigment of local variable `a` is possible because the inner scope of the `do..end` block has access to variables initialized in the outer scope. This demontrates rubys local variable scoping rules when it comes to blocks.

