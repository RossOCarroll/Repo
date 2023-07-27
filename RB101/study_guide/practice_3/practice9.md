```ruby
a = 'Bob'

5.times do |x|
  a = 'Bill'
end

p a
```

This code will output the string `"Bill"` and return the string `"Bill"` as the `p` method returns the same string. 

`line 2` we have local variable `a` assigned to the string object `'Bob'`. `line 4` the `times` method is invoked on the integer `5`. Then a we have  `do..end` that is given the parameter `|x|`. `line 5` we have the local variable `a` being reassigned to the string object `'Bill'`. This reassignment happens 5 times because the `times` method is called on `5`.

The `do..end` block on lines 4 through 6 creates an inner scope but that scope is able to access the variable `a` in the outer scope and we see the reassignment when the method `p` is called on the variable `a` on `line 8`. 