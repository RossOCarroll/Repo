```ruby
a = "Hello"
b = a
a = "Goodbye"
puts a
puts b
```
On line 5 the puts method is called on the variable 'a' as an argument and the program will output "goodbye" and return nil as the puts method always returns nil. On line 6 the puts method is called on the local variable 'b' which will output "hello" and again return nil.

Line 2 we see that the local variable 'a' is assigned to the string "hello". On line 3 we have the local variable 'b' assigned to the value of variable 'a'. Both pointing to the same string "Hello". On line 4 we have the local variable a reassigned to the string "Goodbye". This demonstrates in ruby how variables acts as pointers to objects in memory. 