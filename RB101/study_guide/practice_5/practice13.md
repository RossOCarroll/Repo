```ruby
a = 7
array = [1, 2, 3]

def my_value(ary)
  ary.each do |b|
    a += b
  end
end

my_value(array)
puts a
```

This code outputs the integer `7` and returns `nil`.

`line 2` the local variable `a` is intialized and assigned to the integer `7`.

`line 3` local variable `array` is initialized and assigned to the array collection `[1, 2, 3]`. 

`line 5` we see the method definition for `my_value` it is given one paramenter `ary`. `line 6` the `each` method is called on `ary` it is given a `do..end` block as an argument and a paramater `|b|`. `line 7` Local variable a is being reassigned to `a + b`.

The `my_value` method doesnt change the value of the local variable `a`, it is a non mutating method. It also has its own self contianed scope and isnt able to access the variable `a` intialized in the outer scope. 