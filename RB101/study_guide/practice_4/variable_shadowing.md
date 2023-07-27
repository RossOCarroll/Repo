```ruby
var = 10

1.times do |var|
  var = 11
end

puts var
```

In this code we have a local variable `var` on `line 1` assigned to the integer `10`. On `line 3` the `times` method is invoked on the integer `1` with a `do..end` block passed to it as an argument. In that `do..end` block we have the parameter `|var|` then on `line 4` the local variable `var` is being reassigned to the integer `11`.

This reassignment on `line 4` doesn't happen because we have the parameter `|var|` and the local variable `var` on `line 1` sharing the same name. This concept is known as variable shadowing. The `puts var` will disregard the reassignment and use the local variable `var` on `line 1`. 