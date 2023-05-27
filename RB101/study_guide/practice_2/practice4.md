```ruby
a = 4
b = 2

2.times do |a|
  a = 5
  puts a
end

puts a
puts b
```

The code outputs 5 , 5, 4, 2, all on new lines and returns nil as the puts method called on line 10 and 11 will always return nil. On line 2 a varible 'a' is assigned to the integer 4 on line 3 the varible 'b' is assigned to the integer 2. Line 5 we have a .times method invoked on the the integer 2. A do..end block is then stated with the paramater |a| in the block we have variable a being reassigned to the integer 5. Then on line 7 the puts method is called on varible a as an argument. because of the 2.times method the code in the block is run twice that why we get the first 5. The puts a on line 10 is outputing 4 due to the variable shadowing accuring on line 5 with the paramater |a| being the same name as the local varible a on line 1.. thus the reassigment never happens.
