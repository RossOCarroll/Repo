1.
In this code method invocation occurs on line 9 when the repeater method invoked with the
argument of the string 'Hello'.

On line 1 through 7 a method is defined with the name repeater. With the repeater 
method definition there is a paramater string. Withing the method a local varible
result is initinitialized  scoping it within the repeater method and point to the value of an empty string. On line 3 each_char method is called on string. When 'Hello' is passed as an argument on line 9 string and hello become aliesis. The each_char method will iterate over every character in the 'Hello' string starting with 'H'. A block follows the each_char method from lines 3 through 5. One line 3 |char| is initialzed as a varible scoped within the block. During the iteration |char| will hold the value of each charicter from the string.

On line 4 we have the result varible being appened by the char varible twice using the << destructive method. On line 5 we see an end to the each_char iteration and it returns the collection. On line 6 the mutated varible result is returned with every character returned twice. On line the repeater method returns the string "HHeelllloo".

```ruby
def repeater(string)
  result = ''
  string.each_char do |char|
    result << char << char
  end
  result
end

repeater('Hello')
```





