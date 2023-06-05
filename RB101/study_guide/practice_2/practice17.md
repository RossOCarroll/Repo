```ruby
def fix(value)
  value = value.upcase!
  value.concat('!')
end

s = 'hello'
t = fix(s)
```

On line 7 The local varible 's' is initialized and assigned to the string object 'hello'. On line 8 the local variable 't' is asigned to the return value of the fix method invocation with the varible s passed to it as an argument.

Line 2 is the fix method definition with value as the parameter. Line 3 value is assigned to the return value of upcase! method called on value. The upcase! is method destructive method.  On line 4 we have the concat method called on value   with '!' passed as an argument.

The s variable is still pointing to the string 'hello' and varible to is pointing to 'HELLO!' which is what the return value of the fix method. This demontrate rubys object passing and object mutability