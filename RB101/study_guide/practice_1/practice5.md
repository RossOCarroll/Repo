```ruby
def include?(arr, search_item)
  !arr.each { |item| return true if item == search_item }
end

include?([1, 2, 3, 4, 5], 6)
```

In this snipet of code on line 5 we have the include? method invoked with an array [1, 2, 3, 4, 5] and a single integer 6 passed to it as an argument.

On line 1 the inculed method is defined with 2 paramaters : arr and search item. The method incule? invokation will pass the array and integer to the parameter. A block is then initaized the curly braces with the |item| varible inialized. Within that block a conditional is stated. The method will return the bolean true if the item varible is equal to the search_item using the equality comparison which is passed as 6. 

The .each method will iterate through each element in the array to check if the search_item which is 6 and return a true or a false. In this case the integer 6 is not includexd in the array passed [1, 2, 3, 4, 5] to the method include? and the method returns false.
