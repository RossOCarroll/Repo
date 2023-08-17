```ruby
name = 'Bob'
save_name = name
name.upcase!
puts name, save_name
```

Line 2 the local variable `name` is intialized and assigned to the string object `'Bob'`. 

line 3 local variable `save_name` is initialized and assigned to the value of the `name` variable. `save_name` and `name` are pointing to the same object `'Bob'`.

Line 4 the `upcase!` method is called on the `name` variable. This method is a destructive method meaning it will mutate the object `'Bob'` to `'BOB'`. Because it mutating and both variables are pointing to the same object the output will be `'BOB'` and `'BOB'`. Ruby is acting here as pass by refernce. 