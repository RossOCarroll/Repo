```ruby
def a_method(string)
  string << ' world'
end

a = 'hello'
a_method(a)

p a
```
On line 9 we have the p method called on the local variable a which is assigned to the string object 'hello'. a_method is called on the local variable a = 'hello' on line 7 and the string object is passed to the method a_method definition on line 2. In that string method the destructive << is concatenated the string 'hello' 

Because of the destructive << the string object is appended with the string ' world' now the a variable points to the string 'hello world'. 