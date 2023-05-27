```ruby
def plus(x, y)
  x = x + y
end

a = 3
b = plus(a, 2)

puts a
puts b
```
In this code we see on line 6 the variable a is initialized and assigned to the integer 3. On line 7 we see the varible b is assigned to the return value of the method invocation plus with 2 arguments passed in variable a and the integer 2.

line 2 we see the method definition for plus taking 2 arguments represented by the paramaters x and y. In the method definition on link 3 we have the paramater x which is an alisis for the varible a assigned to the sum of x and y which is an alesis for the integer 2 that was passed to it on line 7. Now b is assigned to the return value of of the plus method which is 5. 

Line 9 puts method is invoked on varible a which outputs 3 and returns nil and b outputs 5 and returns nil. This code demostrates ruby object passing to a method. As methos definitions have theyre own scope.




