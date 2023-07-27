```ruby
# Can add code here

1.times do
  name = "Jilly Bean"
end

1.times do
  puts name
end
```

This code will raise an error for undefinted local variable or method `name`. 

This error is raised when we try and called the `puts` method on the local variable `name` on `line 9`. Due to Rubys scoping  rules with blocks we are unable to access the `name` variable. `name` was initialized on `line 5` with in the inner scope of the `do..end` block that is passed to the `times` method from `lines 4 - 6`. `puts` called on `name` is in the inner scope of the `do..end` passed to the `times` methods on `lines 8 -10`. These are two seperate scopes.

To Fix this we can initialized the `name` variable on `line 2` and set it to an empty string. We are allowed to access variables inialized in the outer scope from the inner scope but not vice versa.

