```ruby
[[1, 2], [3, 4]].map do |arr|
  puts arr.first
  arr.first
end
```

line 1 // Method Call (map) // The outer array // None // New array : [[1], [3]] // No 

line 1-4 // Block execution // Each sub-array // None // [[1], [3]] // yes used by map for transformation

line 2 // method call (first) // Each sub array // none // Element at index 0 // yes used by puts

line 2 // method call (puts) // element at index 0 // outputs a string represtation of an integer // nil // No

line 3 // method call (first) // each sub array // none // element at index 0 if sub array // Yes used to determine return value of block

```ruby
my_arr = [[18, 7], [3, 12]].each do |arr|
  arr.each do |num|
    if num > 5
      puts num
    end
  end
end
```

line 1 // variable assignment // [[18, 7], [3, 12]] // none // [[18, 7], [3, 12]] // no

line 1 // Method call (each) // The outer array // None // Array method is called on // Yes return value is assigned to the variable my_arr

Line 1-7 // Block Execustion // Each sub-array // None // each sub array // no each doesnt not care about the truithness of the block

line 2 // Method call (each) // Eacg element in inner array // None // The array that it is called on // yes used tp determine the return value of the block

line 2-6 // inner Block excution // Each element in array // none // nil // No

line 3 // Comparison > // Element of the sub array // non // Boolean // yes evaluated by if

line 3-5 // Conditional statement // The result of the expresson num > 5 // none // nil // yes used to determine the return value of the block

Line 4 // Method call (puts) // integers that are greater than 5 // outputs string representation of integer // nil // yes used to determine return value of the conditional statment if the condition is met



```ruby
[[1, 2], [3, 4]].map do |arr|
  arr.map do |num|
    num * 2
  end
end
```

| line |     Action    |    Object     |    side - effect    |    Return Value      |  Is the return value used? |

line 1 // method call (map) // [[1, 2], [3, 4]] // None // New array [[2, 4], [6, 8]] // no

line 1 - 5 // outer Block execution // Each sub - array // none // New transformed array // yes to be transformed by map (top level)

line 2 // method call (map) // Each element in sub - array // none // new sub arrays // yes to determine outer blocks return value

line 2 - 4 // block execution // each element // none // product of num * 2 // yes to be used by inner map for transformation

line 3 // method call (*) with integer 2 as argument // Element with-in each sub array // none // an integer // yes, to determine return value off inner block



```ruby
[{ a: 'ant', b: 'elephant' }, { c: 'cat' }].select do |hash|
  hash.all? do |key, value|
    value[0] == key.to_s
  end
end
# => [{ :c => "cat" }]
```

| line |     Action    |    Object     |    side - effect    |    Return Value      |  Is the return value used? |

line 1 // method call (select) // array of hashes // none // selection # => [{ :c => "cat" }] // no

line 1-5 // Outer? Block execution //  each hash in the array // none // new selected elements // yes to be used by select

line 2 // method call (all?) // hash object // none // boolean // Yes // yes to determine  selects blocks return value

line 2- 4 // Block execution // each hash key value pair // none //  boolean //  yes to be used by all? method

line 3 // Comparison // key, value pair // none // Boolean // yes to be determined by the inner block



```ruby
[[[1, 2], [3, 4]], [5, 6]].map do |arr|
  arr.map do |el|
    if el.to_s.to_i == el   # it's an integer
      el + 1
    else                    # it's an array
      el.map do |n|
        n + 1
      end
    end
  end
end
```

| line |     Action    |    Object     |    side - effect    |    Return Value      |  Is the return value used? |

line 1 // method call (map) // [[[1, 2], [3, 4]], [5, 6]] // none // new array [[[2, 3], [4, 5]], [6, 7]] // no

line 1 - 10 // Block execution // On outer array // none // transformed formed array // yes by first map method call

line 2 // method call (map) // 1st layer sub- array // none // new 1st layer sub- array // yes by outer maps block

line 2-9 // Block execution // on each element // none // transformed elements // yes by 2nd layer map 

line 3-6 // If conditional // result of el.to_s.to_i == el // none // if integer + 1 // yes by the second maps block execution

line 4 // + method // element , 1 // none // element + 1 // yes by the second map method call blocks

line 6 // method call (map) // elements in sub array 3rd level // none // elemts + 1 // yes by the second maps block execution

line 6 - 8 // block execution // elements in sub array // none // trans formed elements // yest usued by 3 level map method call

line 7 // + method call // elements // none // elements + 1 // yes used by 3rd level method maps block execution