```ruby
numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.shift(1)
end

```

When we run this code it will output the integers `1 , 3`. This is because with each iteration the `shift` method called on the `numbers` array given an argument of `1` will remove the element at index 1. The first iteration it will remove 2 and the secod it will remove `4`. 


```ruby
numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.pop(1)
end
```

this code will output the integers `1, 2`. This is because when the each method is called on the first itereation will output `1` on `line 16` and then on `line 17` the `pop` method is called on numbers which will remove the last element in the array `4`. The second iteration will output `2` and remove `3`. After that the iteration is done.