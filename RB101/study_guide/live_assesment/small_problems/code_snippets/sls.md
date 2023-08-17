```ruby
def short_long_short(string1, string2)
  if string1.length > string2.length
    string2 + string1 + string2
  else
    string1 + string2 + string1
  end
end
​
longer_string = short_long_short('abc', 'defgh')
```

`line 10` local variable `longer_string` is initialized and assigned to the return value of the `short_long_short` method. It is given two arguments the string objects `abc` and `'defgh`. 

`line 2` is the method definition for `short_long_short`, it is given tewo parameters `string1` and `string2`.

`line 3` an `if..else` statement asking if the length of `string1` is larger than the length of `string2` using the `length` method called on `string1` and `string2`. If it is longer then the method will return `string2 + string1 + string2` using string concatenation. `else` it will return `string1 + string2 + string1`.

This demontrated rubys concept of truthiness as we use an `if..else` statement to determine the truthiness of the argments passed ot the `shot_long_short` method.