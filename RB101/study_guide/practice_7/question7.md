The differnece between a method that mutates the caller and a method that does not is that a mutating method will change the orginal object. Also known as a side effect. A non mutating method will just recieves a copy of the object thus not altering the orginal object. In the ruby docs you see a non mutating method thats followed → new_str. a mutating method will be followed by → str.


```ruby
a = "string"

a.upcase!

b = [1, 2, 3]

b.pop

c = 'hello'

c.capitalize

d = 'goodbye'

d.chop

```


