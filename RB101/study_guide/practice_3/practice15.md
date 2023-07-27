```ruby
a = 5.2
b = 7.3

a = b

b += 1.1
```

on `line 2` the local variable `a` is being initialized and assigned to the float `5.2`.

On `line 3` the local variable `b` is being assigned to the float `7.3`.

On `line 5` the local variable `a` is being reassigned to the value of variable `b`.

On `line 7` jthe local variable `b` is being reassigned using `+=`, This is Rubys Syntactical sugar for `b = b + 1.1`. 

this code illustrates rubys concept of variables as pointers. When `a` is reassigned on `line 5` its pointing to the same object variable `b` is pointing to. then after the reassignment on `line 7`, `b` is now pointing to the float `8.4`.