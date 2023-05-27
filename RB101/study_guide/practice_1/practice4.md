```ruby
def test(b)
  b.map {|letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)
```



On line one when we have a method definition with the method name test. A paramater is then attached to the test method (b). On line 2 within the test method we have the map method called on b. Following is a block signified by curly braces{}. In the block we have a |letter| varible. and then the string "I like the letter: #{letter}". Here we are using string interpolation with use of the syntax #{}. 

on line 5 'a' varible is initialized and is bound to an array of strings ['a', 'b', 'c']. We have the test method invoked on line 6 which passes the array 'a' to the test method. The paramater b allows us to pass the array to map method invoked on line 2. Here we see the map method iterated over each element in the array and retuen a new array of transformed elements. With the use of string interpolation we are able to replace the #{letter} with each element in the array. The test method will output a new array ["I like the letter: a", "I like the letter: b", "I like the letter: c"].