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

This code will out the string `'hello'` 3 times and return `nil`.

On `line 11` The `exsample` method is invoked with the string object `hello` passed to it as an argument.

On `line 2` we see the method defin ition for `exsample` with `str` as a paramater. `line 3` local variable `i` is initialized and assigned to the integer `3`. `line 4` the `loop` method is invoked with a `do..end` block passed to it as an argument this create a new scope. `line 5` the puts method is invoked on `str`. `line 6` we have ruby syntaxt for `i = i - 1`. `line 7` a `break if` statemnet when the value of `i` is equal to `0`. 

When the string `hello` is passed to the `exsample` method the `puts` method will output the string `hello` 3 times as the variable `i` is referencing 3. The `loop` method runs 3 times and breaks when `i` is equal to 0. 

This code illustrates rubys concept of local variable Scope as the `loop` method has accesss to reassign `i` in its outer scope. 
