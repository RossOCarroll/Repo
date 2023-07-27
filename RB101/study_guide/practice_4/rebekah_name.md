```ruby
first = "Rebekah"
loop do
  middle = "Lauren"
  loop do
    last = "Stokes"
    break
  end
  puts "Full name:"
  puts first + " " + middle + " " + last
  break
end
```

The error is raised when the `puts` method is called on the local variable `last` on `line 10`. 

We have two nested scopes: Frist layer is the outer scope where we see the local variable `first` inialized and assigned to `rebekah`.  the second layer `loop` method callled on `line 3` with the `do..end ` block passed as an argument from `lines 3 -12`. The third layer `loop` method called on `line 5` with a `do..end` block passed as an argument from `lines 5 - 8`. 

According to Rubys rules with blocks we cannot access variables initialed in an inner scope from the outer scope. This is why we get an error raised on the `puts` method called on the variable `last` as it was initialised in the `do..end` block from `lines 5-8`.

We can fix this by initialising the local variables `first` `middle` and `last` in the outer scope. The nested scopes can access variables in itialized in the outer scope. 