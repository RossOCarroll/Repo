=begin 

Reverse String Array: Write a Ruby method that takes an array of strings and returns a new 
array with each string reversed.


-input:
  -An array of strings

Ouput:
  -A new array with each satring reversed

Explicit requirements:
  -A new array should be returnd

Test Cases // Exsamples

Example: 

reverse_string_array(["apple", "banana", "cherry"]) should return ["elppa", "ananab", "yrrehc"]

Data Structure:
  -Strings
  -Arrays

Algorithm:
  -Set a new revered array variable to an empty array
  -Iterate over input array
    -for each string in the array 
      -Reverse the string and append to new revered array
  -Return new reversed array

=end


def reverse_string_array(array)
  new_reversed_array = []

  array.each do |string|
    new_reversed_array << string.reverse 
  end

  new_reversed_array
end


p reverse_string_array(["apple", "banana", "cherry"])