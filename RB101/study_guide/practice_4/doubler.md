```ruby
def doubler(string)
  string << string
end

plant = "string bean"
p doubler(plant)

p plant
```

This code will output the desired string `"string beanstring bean"` as the `p` method was called on the `plant`` variable.

This differs from the previous code as noe the `doubler` method is now mutating method. On `line 2` the `<<` method is now destructively adding the strings together. When the local variable `plant` is passed to the `doubler` it permanently changed to to `"string beanstring bean"`. 

This shows that that the `doubler` method is a mutating method and that ruby here is acting with a pass by reference behavior. The relationship between `plant` and `strng` is now they are pointing to the same object.