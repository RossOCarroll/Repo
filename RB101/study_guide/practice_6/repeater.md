```ruby
def repeater(string)
  result = ''
  string.each_char do |char|
    result << char << char
  end
  result
end

repeater('Hello')
```

On `line 10` the `repeater` method is invoked and it is given one argument, the string object `'Hello'`. 

On `lines 2 - 8` is the method definition for `repeater`, it takes one parameter `string`.

`line3 ` the local variable `result` is initialized and assigned to an empty string.

`line 4` the `each_char` method is called on `string` followed by a `do..end` block as an argument. The `do..end` block is given one parameter `|char|`. This will pass each charicter in the `string` to the block. 

`line 5` the double shovel method is used to append the string object `'Hello'` twice to the `result` variable. The value of the `result` vsriasbler is now `'Hheelllloo HHeelllloo`. 

`line 7` the `result` variable is explicitly retuened from the `repeater` method. The `repeater` method will return `'Hheelllloo HHeelllloo`. .