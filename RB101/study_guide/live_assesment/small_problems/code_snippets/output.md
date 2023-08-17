```ruby
output = [1, 2, 3].each do |num|
            puts num
        end
​
p output
```

`line 2` the local variable `output` is initialized and assgined to the return value of the `each` method called on the array collection `[1, 2, 3]`. a `do..end` block is given one parameter `|num|`.

`line 3` the `puts` method is called on the variable `num`. The `each` method will iteratate through the array passing each element to the block. This wil output `1 , 2, 3` and return `nil`. 

The return value of the `each` method returns the orginal array, so ouput is pointing to `[1 ,2 ,3]`. 