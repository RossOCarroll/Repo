```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.select { |n| n.odd? }
```

On line 1 we have the local variable arr initialized and assigned to the data collection array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. On line 4 the select method is invoked on the arr array collection. A block is then initialized with curly braces, within the block |n| is called as a parameter. Finally within the block a .odd? method called. 

The select method returns a new array containing all elements of an array for which the given block returns a true value. The odd? method will return the elements which are odd. We get returned a new array [1, 3, 5, 7, 9]. This demonstrates the select method and how it iterates through arrays. 