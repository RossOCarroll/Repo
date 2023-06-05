```ruby
def test
  puts "written assessment"
end

var = test

if var
  puts "written assessment"
else
  puts "interview"
end
```

On line 6 local variable var is assigned to the return value of the test method invocation. On line 2 through 4 the method definition for test, within this definition the puts method is called on the string object "written assessment". The return value of the puts method is always nil which var variable is now pointing to. 

The conditional statement on line 8 through 12 starts with if called on var which is now pointing to nil. The puts "written assessment" will not execute because nil is falsy and the else branch will execute "interview". The if conditional check to see if var is true. This demonstrates ruby concepts of truthiness, Ruby conceders every object to be truthy but false and nil. 
