```ruby
a = "hi there"
b = a
a << ", Bob"
```
On line 1 'a' variable is initialized and assigned to the string literal "hit there". On line 3 initiates variable 'b' and assigns it to the value of variable a. At this point both variable a and b are pointing to the same string object "hi there". 

On line 4 we have we 'a' variable being appended by the << method. This method is destructive and because string elements are mutable it append the string ", Bob". At this point in the code 'a' points to "hi there, bob" and so does the variable 'b'. This demonstrates how variables at as pointers in ruby as well as object mutability.