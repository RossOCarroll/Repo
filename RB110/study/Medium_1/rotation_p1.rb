=begin
  

Write a method that rotates an array by moving the first element to the end of the array. The original array 
should not be modified.

Do not use the method Array#rotate or Array#rotate! for your implementation.

Example:

Copy Code
rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
rotate_array(x) == [2, 3, 4, 1]   # => true
x == [1, 2, 3, 4]                 # => true


Input:
  -An array of integers

Ouput:  
  -A new array with the first element moved to the last element

Explicit RequirmentsL
  -May not use rotate method

Implicit:
  -If a single element array is input return the single element in a new array

Questions?
  -Will there an empty array as an input?


Data Structure:
  -Arrays

Algorothm:
  -Set result array variable to an empty array
  -Iterate over input array with index
    -if element has index of 0
      -skip that iteration
    -Append every other element to result array
  -Append element at index 0 to result array
  -Return array

=end


def rotate_array(array)
  rotated_array = []

  array.each_with_index do |ele , idx|
    rotated_array << ele if idx != 0
  end
  rotated_array << array[0]
end


p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']