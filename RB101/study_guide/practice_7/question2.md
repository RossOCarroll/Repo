```ruby
loop do
  a = 1

  loop do
    b = 2

    loop do
      c = 3
      a = b
      b = c
      c = 4

      arr = [a, b, c]
      puts arr
      break
    end

    break
  end

  puts arr
  break
end
```

When the `puts` method is invoked on the local variable `arr` on `line 14` it will output the array collection `[2, 3, 4]` and return `nil`. When the `puts` method is called on the local variable `arr` on `line 21` we get an error. This is because of rubys scoping rules due to the variable `arr` being initialised in the inner scope of the `do..end` block on `lines 7 - 16`. Local variables initialized in the inner scoper cannot be accessed on the outer scope. 

This code has nested scopes when it comes to local variables and `do..end` blocks, there are 3 levels of scope. `line 2` local variable `a` is intialized and assigned to the integer `1`, this is in the first level. `line 5` the local variable `b` is intialized and assigned to the integer `2` this is in the second level scope. `line 13` local variable `arr` is intialized and assigned to the array collection `[a, b, c]` putting it in the 3rd level of scope. `line 8` local variable `c` is intialized and  and assigned to the integer `3` this is also in the 3rd level of scope. `line 9 -11` we see local variables being reassigned and this works ok because ruby scoping rules with blocks allow access to variables inntialized in the outer scope from within the inner scope. 