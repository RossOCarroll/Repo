```ruby
[1, 2, 3].select do |num|
  num > 5
  'hi'
end
```
The return value if this select method will be a new `array` with all the same elements in the orginal. This is because the `select` only cares about the trutiness of the last expression in the block which is the string `'hi'`. 

```ruby
['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end
```
The `count` method will call the block on each element and returns the count of elements for which the block returns a `truthy` value. In this case the `count` method will `return` `2` as two of the elements lengths in the `array` are less than 4.

```ruby
[1, 2, 3].reject do |num|
  puts num
end
```

The `reject` method will return a new `array` whose elements in the `array` whose elements return `1false` or `nil` from the block. Because the last evaluated expression is `puts num` which returns `nil` all elements are rejected and this method will `return` a new array with the all the elements in the orginal `array`.

```ruby
['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end
```

When the method `each_with_object` is called on the `array` `['ant', 'bear', 'cat']` id will return a `hash` `{"a"=>"ant", "b"=>"bear", "c"=>"cat"}`. The method argument is a collection object that will be returned by the method in this case a `{}`. The block will take 2 argments of its own `value` and `hash`. The first block arguments represents the current element and the second represents the collection object that was passed in as an argument. In the `block` we see the `key` if the `hash` being assinged to the first letter of the element and the current element is the `value`


```ruby
hash = { a: 'ant', b: 'bear' }
hash.shift
```

when the `shift` method is called on a `hash` with no argument it will return the first key value pair as a `array`. In this case `[a: , "ant"]`. this is a destrutive method that will take out the `key , value` pair out of the `hash` collection.

```ruby
['ant', 'bear', 'caterpillar'].pop.size
```

The `return` value of the following code will be `11`. When the `pop` method is called on the `array` it destructively removes the last element and returns it, in the case the `string` object `'caterpillar'`. Then the `size` method is called on that return value returning the size of the `string` element using chaining methods.

```ruby
[1, 2, 3].any? do |num|
  puts num
  num.odd?
end
```

The block's return value in the following code is the last expression which is `num.odd?` the `odd` method called on the block parameter `num`. This will return `true` for the elements `1` and `3` in the array. The `any?` methods return value will be the boolean `true`. The code itself will output `1` as `puts` was called on `num` on `line 2` and `true` which is the return value of the `any?` method. The iteration will stop after the first element returns `true`.

```ruby
arr = [1, 2, 3, 4, 5]
arr.take(2)
```
The `take` method will return a new `array` contianing the first element, with an argment it will take the first element followed by the number elements given as an argument. Here the argument is `2` so it will return a new array `[1, 2]`.

```ruby
{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end
```

The `map` method preforms transformation depending on the return value of the block. Here the `if` conditional evalating to `true` when the `size` method is called on `value` is greater than `3`. it then returns the value. In this case `'bear'` is returned. the `map` method will return an `array` when called on a `hash` the return will be `[nil, 'bear']`.

```ruby
[1, 2, 3].map do |num|
  if num > 1
    puts num
  else
    num
  end
end
```
The `map` method preforms transformation depending on the return value of the block. In the block the `if` conditional is asking if the element in the `array` is greater then `1` then `puts` is called on `num`. For the first element `1`, the `else` part of the conditional is executed returning  `num`. The other elements are greater then `1` so `puts` is called on `num` this returns `nil` transforming the remailing elements. `map` returns `[1, nil, nil]`.


