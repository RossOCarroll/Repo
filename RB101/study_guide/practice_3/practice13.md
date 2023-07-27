```ruby
n = 10

1.times do |n|
  n = 11
end

puts n
```

This code will output `10` and return `nil`.

On `line 2` the local variable `n` is initalized and assigned to the integer `10`.

`line 4` the `times` method is invoked on the integer `1` with a `do..end` block passed to it as an argument. Within that `do..end` block we have the parameter `|n|`. 

`line 5` the local variable `n` is being being reassigned to the integere `11`. 

This reassigment does not occur beacause the paramater `|n|` shares the same name as the local variable `n` inisialized on `line 2`. This is known as variable shadowning. 