```ruby
def test(str)
  str += '?'
  str.downcase!
end

test_str = "Written Assessment"
test(test_str)

puts test_str
```

This code will output the string `"Written Assessment"` and return `nil`

`line 7` the local variable `test_str` is initialized and assigned to the string object `"Written assesment"`.

`line 8` the `test` methoid is invoked and the variable `test_str` is passed as an argument. 

`line 2` thorugh `line 5` is the method definition for `test`, it is given one parameter `str`. `line 3` `str` is being reassigned using `=+` which is syntactual sugar for `str = str + ?`. `line 4` the mutating `downcase!` method is called on string. 

The `test` method will implicitly return `"written assesment"`. The `test_str` variable will remain unchanged when the `puts` method is called `line 10` because of the reassignment on `line 3`. This illustrated ruby concept of variables as pointers. 