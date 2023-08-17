```ruby
x = "hi there"
my_hash = {x: "some value"}
my_hash2 = {x => "some value"}
```

`line 2` the local variable `x` is initialized and assigned to the string object `"hi there"`. 

`line 3` the local variable `my_hash` is initialised and assigned to the hash collection with a key value pair `{x: "some value"}`. The symbol `x:` is unrelated to the variable `x` initialized on `line 2`

`line 4` the local variable `my_hash2` is intialiazed and asigned to a hash collection with the key value pair `{x => "some value"}`. Here it is important to note that the key in this pair `x` is refering to the local variable `x`.

