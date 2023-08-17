On `line 1` through `line 3` we see the `double` method defintion that starts with `def`

```ruby
def double(num)
  num * 2
end
```

`line 1` we see the parameter `(num)`.

```ruby
def double(num)
```

`line 6` is the method invocation for `double`

```ruby
double(int)
```

The argument is on `line 6` that is passed to the double method: `(int)`.

On `line 8` when the `puts` method is called on the local variable it outputs the integer `2`. `line 6` when the double method is invoced and the local variable `int` is passed to it the method will return 4. The 1`double` method is a non mutating method and will not change the orginal object. Because integers are immutable we are not able to mutate the value of `int`.
