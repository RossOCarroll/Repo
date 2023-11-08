```ruby
[1, 2, 3].select do |num|
  num > 5
  'hi'
end
```

The `Select` `method` only cares about the the truthiness of the block. The return of the block is the last expression which is the `string` object `hi`. Because everthing in Ruby is concidered a truthy value except 1`false` and `nil` the select method will output the orginal string.

```ruby
['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end
```

We can find out more about how the 1`count` method treates the block in the Ruby documentation. With no argument and a block given, calls the block with each element; returns the count of elements for which the block returns a truthy value. The `1count` method should return `2` as `ant` and `'bat'` meet the requirments in the block.

```ruby
[1, 2, 3].reject do |num|
  puts num
end
```

The ruby documentations states "Returns a new Array whose elements are all those from self for which the block returns false or nil:". Because the `puts` method is called in the block that is the last exxpression evaluated, the `puts` method will always return `nil`. The 1`reject` method will return all the elements in the `array`.

```ruby
['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end
```

The Return of the `each_with_object` method will be the a `hash` with the element at the index `0` as the `key`. The argument that is given is a `{}` and creates a key , value pair with the `key` being the element at index `0` of each hash.

```ruby
hash = { a: 'ant', b: 'bear' }
hash.shift
```

When `shift` is called on `hash` it will return the first key value pair in the `hash` which is `[a: 'ant']` as a two item `array`. This method is also descructive and will mutate the orginal collection.

```ruby
['ant', 'bear', 'caterpillar'].pop.size
```

When `pop` is called on the array it descurtivly removes the trailing element and returns which will be the `string` `'caterpiller'`. When have then chained the method `size` to that return and it will count the `string` giving us a return of `11`.

```ruby
[1, 2, 3].any? do |num|
  puts num
  num.odd?
end
```

The Blocks `return` value in this `method` is the last expression which is the `booleen` `true`. The `any?` method should output `1, 2, 3` as the `puts` was called on `num` and then the the method will output `true`.

```ruby
arr = [1, 2, 3, 4, 5]
arr.take(2)
```

The `take` method returns a new `array` starting from the first element in the `array` and counting depending on the non negative `integer` given as an argument. It is non destructive and does not effect the orginal array. We can find this out in ruby docs.

```ruby
{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end

```

The return value of `map` in this case is will be the orginal `hash` `{ a: 'ant', b: 'bear' }`. `map` always preforms tranformation based on the return value of the block.

```ruby
[1, 2, 3].map do |num|
  if num > 1
    puts num
  else
    num
  end
end
```

This code will output `[1, nil, nil]`. The `map` method will preform transformation given the return value of the block. In this case the first iteration is `1` and it doesnt pass the `if` conditional. But `2` and `3` do pass the `if` conditional and the line of code `'puts num` is excuted. `puts` will return `nil` and we see `2` and `3` being replaced  or transformed to `nil`.