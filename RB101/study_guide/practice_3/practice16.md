```ruby
arr = [1, 2, 3, 4]

counter = 0
sum = 0

loop do
  sum += arr[counter]
  counter += 1
  break if counter == arr.size
end 

puts "Your total is #{sum}"
```

This code will output the string `"You total is 10"` and return `nil`.

On `line 1` the local variable `arr` is being assigned to an array collection on integers `[1, 2, 3, 4]`.

`line 4` we have the local variable `counter` being assigned to the integer `0`
`line 5` the local variable `sum` being assigned to the intger `0`

On `line 7` the `loop` method called with a `do..end` block passed to it as an argument. `line 8` we have the variable `sum` being reassigned to `sum + arr[counter]`. `line 9` the variasble `counter` is being reassigned to `counter + 1`. `Line 10` a `break if ` statment will take us out of the loop when `counter` equals the size of the array `arr`.

This code illustrates rubys rules of local variable scope. The assisgments on `lines 8-9` are allowed because variables in the outer scope are able to be accesss in the `loop` methods inner scope.