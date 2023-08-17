```ruby
num = "77"
friends = {1 => "Bill", 2 => "Bob", 3 => "Jake", 4 => "Aaron"}

friends.each do |num, name|
  puts "#{name} wants a secret number"
  if name == "Bob"
    puts "'Ok', says Joey. Here is the secret number:"
    puts "#{num}"
  else
    puts "No way!"
  end
end
```

This code illustrates the concept of variable shadowing. one `line 2` the local variable `num` is initialized and assigned the string object `"77"`. On `line 3` the local variable `friends` is initialized and assigned to the hash collection: `{1 => "Bill", 2 => "Bob", 3 => "Jake", 4 => "Aaron"}` with `key , value` pairs. 

`line 5` the `each` method is called on `friends` and a `do..end` block is passed to it as an argument. The `do..end` block is given 2 parameter `|num, name|`. When the `puts` method is called on the string `"#{num}"` on `line 9` the `num` is referencing the parameter `|num|` not the variable `num` on `line 2`. 

`line 7` when the `if else` conditional statment asked if `name` is equal to `"Bob"` it will excute `line 8` and `line 9`. But `num` in this case is refering to th `key` in the `key, value` pair of the `friends` hash which is `2`. The parameter in the `do..end` is shadowing the local variable `num` because they share the same name.

To fix this issue we could change the parameter `num` to `list`.