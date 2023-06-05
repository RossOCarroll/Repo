```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.select { |n| n.odd? }
```

on line 4 the select method is called on the local variable arr which assigned to the data collection array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. The select method will return a new array, we then see a block initiated with curly braces with a paramter 'n'. 'n' acts as an alesis and a .odd? methos is called. The se;ect method will iterate through the arr array and 'select' the odd numbers and return a new array with only the odd numbers. 
