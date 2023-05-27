``` ruby
def merge(array_1, array_2)
  array_1 | array_2
end

arr1, arr2 = ['hello'], ['hello', 'world']
merged = merge(arr1, arr2)
merged[0][0] = 'J'
p merged
p arr1
p arr2
```

On line 5 we have a double assignment with two local varibles arr1 and arr2. arr1 is assigned to the array object contianing the string 'hello'. arr2 is assigned to the array object with 'hello' 'world. On line 7 we have the merge local varible assigned to the return value of the method invokation merge with arr1 and arr2 passed as arguments.

on line 2 trough 4 merge method definition with array_1 and array_2 as parameters. Line 3 we see 

On line 8 the merge varible 