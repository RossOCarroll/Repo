```ruby
def cap(str)
  str.capitalize!   # does this affect the object outside the method?
end

name = "jim"
cap(name)
puts name 
```

On line 8 the puts method is called on the name variable this code will output the string object 'Jim' and return nil as the puts method always returns nil. On line 6 we have the name variable initialized and pointing the string "Jim". On line 7 the cap method is invoked with the name varible passed to it as an argument. 

On line 2 the method definition is involked with str set as a parameter. Line 3 the destructive capitalize! method is invoked on the str parameter. When the cap method is invoked and the name variable passed to it as an argument the capitialize! method mutates the string to 'Jim" string. This is why the program outputs 'Jim' and not 'jim' showing rubys concept of variables as pointers, object passing, and mutability. Because the cspitized! method is a destructive method it effects the object outside of the method.