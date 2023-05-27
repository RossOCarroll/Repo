```ruby
x = "hi there"
my_hash = {x: "some value"}
my_hash2 = {x => "some value"}
```
In this code snipet we start with intialzation on a varible 'x' that is bound to a string using the assignment operator = "hi there". 

On line 2 when have another varible intialized called my_hash that point to a hash data type with a key value pair represened by the key symobol x: and the value as a string "some value".This syntax is a newer typ to creating a hash. 

On line 3 another varible is inialized named my_hash2 that is bound to a hash representing a key value pair of the varible x with a hash rocket and a value of the string "some value". The key is varible x that points to the string literal "hi there" that was initialized on line one. This assigment will return {'hi there' => 'some value'}

It is important to note that the key x: in the my_hash is different from the key value in my_hash2 that is represented but the local varible x. Ruby provides this flexability of having a varible as in a key in a key value hash pair.
