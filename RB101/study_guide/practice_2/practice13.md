```ruby
a = "Hello"

if a
  puts "Hello is truthy"
else
  puts "Hello is falsey"
end
```

On line 2 we see the local variable pointing at the string object "Hello". On line 4 a if..else conditional is stated. The conditional if statement asks if 'a' is true then it will output the code on line 5. Because every element in ruby is truthy beside false and nil the local variable 'a' pointing to "Hello" is considered true and the puts method is called on the string "Hello is truthy". The puts method will output the string and return nil as the puts method always returns nil.
