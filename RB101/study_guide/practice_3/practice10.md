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

This code will output the string `"Your total is 10"` and return `nil`. 

`line 2` we have the local variable `arr` assigned to the array `[1, 2, 3, 4]`. On lines 7 through 11 a `loop` method is invoked with a `do..end` passed to it as an argument. This `do..end` block creates a inner scope. This inner scope has access to the local variables initialised in the outer scope `counter` and `sum`.

`line 8` we see the varible `sum` being reassigned to `sum + arr[counter]`. `line 9` counter is being reassigned to `counter + 1`. This code will loop through the array add all the assigning to the variable `sum`. `line 10` we have a `break if` statement when `counter` is equal to the size of the array `arr`.

`line 13` we are using string interpolation to output `sum` into the string `"Your total is 10"`. This demonstrated runbys concept of variable scope when it comes to block ass the inner scope is able to access the outer scope.

