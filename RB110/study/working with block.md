Ex 3
```ruby
[[1, 2], [3, 4]].map do |arr|
  puts arr.first
  arr.first
end
```

line / action / object / side affect / return value / is the return value used?

line 1 / method call (map)/ on the outer array / none / new array [1, 3] / no but displayed
line 1-3 / block execustion / each sub array / none /  elements at 0 index in each sub array/ yes used by map for transformation
line 2 / method call (first) / each sub array / none / elements at index 0 in each sub array / yes used by puts
line 2 /  method call (puts) / element at index 0 in sub array / output to the screen / nil / no but is output as a string
line 3 / method call (first)/ each sub array / none / elements at index 0 in sub array/ yes used to determine the return value of the block

ex 4
```ruby
my_arr = [[18, 7], [3, 12]].each do |arr|
  arr.each do |num|
    if num > 5
      puts num
    end
  end
end
```
,
line 1 / variable assignment / [[18, 7], [3, 12]] / none / [[18, 7], [3, 12]]/ no
line 1 / method call (each) / on outer array / none / the orginal nested array / yes to assign to variable my_arr
line 1 -7 / block execustion / each sub array / none / each sub arrays / no
line 2 / method call (each) / each the sub array / none / each sub array / yes used to determine the return value of outer block
line 2-6 / block execustion / each element in sub array / none / nil / no
line 3/ conditional strment / element in sub array / none / boolean / yes evaluated by if
line 3-5 / if conditional / the result of num > 5 / none / nil / yes used to determine the return value of the inner block
line 4 / method call (puts) / elements in the sub arrays that are greater then 5 / outputs num / nil / yes used to determine return value of the conditional statement 

```ruby
[[1, 2], [3, 4]].map do |arr|
  arr.map do |num|
    num * 2
  end
end
```
line / action / object / side affect / return value / is the return value used?

line 1 / method excustion (map)/ [[1, 2], [3, 4]]/ none / a new array [[2, 4], [6, 8]] / no
line 1-5 / block execustion / inner arrays / none / [[2, 4], [6, 8]] / yes used by map to preform transformation
line 2 / method call (map) / inner arrays / none / [2, 4], [6, 8] / yes used to determine outter blocks return value
line 2-4 / inner block execustion / elements in inner arrays / none / modified elements in inner arrays / yes used by inner map method to preform transformation
line 3 / multiplication method (*) with 2 as an argument / elements in inner array / none/ modified each element in inner array (integer) /  yes used to determine inner block's return value


```ruby
[{ a: 'ant', b: 'elephant' }, { c: 'cat' }].select do |hash|
  hash.all? do |key, value|
    value[0] == key.to_s
  end
end
# => [{ :c => "cat" }]
```
line / action / object / side affect / return value / is the return value used?

line 1 / method call (select)/  array of hashes / none / new array [{ :c => "cat" }] / no
line 1-5 / outer block execustion / hashes within the array / none / [{ :c => "cat" }] / yes used by select to preform selection
line 2 / method call (all?)/ the key value pairs within the array / none / true for [{ :c => "cat" }] / yes used for the return value on the outter block
line 2-4 / inner block execustion / on each hash object / none / true for [{ :c => "cat" }] / yes used by all? method
line 3 / value reference at index 0 / each value / none / element at index 0 of values / yes used for the return value of the inner block
line 3 / convertion to string method / keys in key value pair / none / strings of the keys / yes comparison operator / yes used for the return value of inner block
line 3 / compareison '==" operator / values at index 0 and the string versions of keys / none / boolean / yes used for the return value of inner block
line 3 / element reference / values at 0 index / none / the elements at index 0 / used by the comparison operator

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
line / action / object / side affect / return value / is the return value used?

line 1/ method call (map)/ nested array 3d / none / a new array [[[2, 3], [4, 5]], [6, 7]] /  no
line 1-11 / block execustion / 2nd level of arrays / none / modified elements in the nested arrays / yes by outter map method for transformation
line 2 / method call map / 1 st level of arrays / none / 1st level of nested arrays transformed / yes for the return value of the outer block
line 2-9 / block execustion / 1 st level of arrays in nested array / none / 



