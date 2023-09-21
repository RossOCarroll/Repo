```ruby
{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end
```

The retuen value of `map` in the following code is `[nil, "bear"]` as map always preforms transformation based on the return value of the block. 