```ruby
x = 10

def add_five
  sum = x + 5
  x = sum
end

add_five
puts x
```

When executed this code will give us an error for undefined local varaible or method. This is because the `add_five` method has its own self contianed scope when it comes to local variables. We dont have access to the local variable `x` from with in the `add_5` method. Methods can olny acess variables that were intialized inside the method or defined as perameters. 

One solution is that we pass the local vairable `x` to the `add_five` method as an argument. We would also need to set a perameter for the `add_five` method. 