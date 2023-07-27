```ruby
def doubler(string)
  string + string
end

plant = "string bean"
p doubler(plant)    # prints "string beanstring bean"

p plant 
```

On `line 6` the `p` method is called on the return value of the `doubler` method with the local variable `plant` as an argument. This code will output the string `"string beanstring bean"`.

On `line 8` the `p` method is called on the local variable `plant` which will output the string `"string bean"`. 

Because the `doubler` method is using string concatenation on `line 2` with the code `sting + string` this does not mutate the variable `plant` that is sent to it. This illustrates that the ruby is acting as a pass by value behavior. Operations preformed in the `doubler` method have no side effects on the original object. The `doubler` method is a non mutating method.

