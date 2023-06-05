```ruby
def change_name(name)
  name = 'bob'      # does this reassignment change the object outside the method?
end

name = 'jim'
change_name(name)
puts name 
```

The puts method called on the local variable name will output the string object 'jim' and will return nil, as the puts method will always return nil. The method definition on line 2 has the same name as the local variable name. On line 3 we have a name reassignment to the string 'bob' but because this happens in the methods scope we don't see the reassign happen in the main scope when the change_name method is called on line 7. This demonstrates rubys concepts of variable scope and object mutability. 