```ruby
def example(str)
  i = 3  
  loop do    
    puts str    
    i -= 1    
    break if i == 0  
  end
end

example('hello')
```

on `line 11` we have the `exsample` method invocation with the string `'hello' passed to it as an arugument. 

`line 2` we have the method definition for `example` taking `str` as a parameter. `Line 3` with have the local variable `i` initialized and being assigned to the integer `3`. `line 4` we have a loop method being called with a `do...end` block passed in as an argument on lines 4 through 8. Within that block we have a `puts` method called on the `str` that points to the string `'hello'`. `line 6` we have a re assignment of `i` to the return value of `i - 1` and on line 7 we have a `beak if` statemnet when `i` shares the same value as `0`. 

This code will output the string `'hello`' 3 times and return `nil`. This demontrates rubys scoping rules when it comes to local varibles. As the `do..end` block on `line 4` thought `line 8` has access to the varibles `i` and the parameter `str`.

