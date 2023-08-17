A coding language that exbits "pass by reference" behairvor is when objects are passed to a method that changes or mutates the orginal object. We are passing in a reference to that object. Pass by value behoaviur is when objects that are passed to a method, the method only recieves a copy of that object thus not change the orginal object, causeing no side effect. 

```ruby
def pass_by_value(var)
  var.upcase
end

x = "hello"

pass_by_value(x)

def pass_by_reference(param)
  "Hello" << param
end

y = "World"

pass_by_reference(y)
```

