```ruby
a = [1, 2, 3, 3]
b = a
c = a.uniq
```

On line 2 we have the variable a being assigned to to an array collection [1, 2, 3, 3]. On line 3 the variable b is assigned to the value of varible a. At this point in the program both variables a and b are pointing to the same array collection. On line 4 a variable 'c' is initialized and assigned to the return of .uniq on the a variable as an argument. This method returns the array with only unique element. Variable c is now assigned to an array [1, 2, 3]. If uniq! method was called on a this would mutate the array and since all 3 varibles are pointing to the same object they would all output [1, 2, 3]. This code demontrates how ruby treat variables as pointers and mutability.