=begin

Write a method that rotates an array by moving the first element to the end of the array. 
The original array should not be modified.

Do not use the method Array#rotate or Array#rotate! for your implementation.

Input:
  -Array

Output 
  - A new array with the elements rotated

Rules:
  -Explicit:
    -The orginal array should not be modified
    -May not use Array#rotate 
  -Implicit:
    -elements in the array can be any type of element
    -A single element array should return that array
    -After the first element is moved to the end the rest of the elements ar moved down in index

Questions:
  -

Test cases // Exsamples:
rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
rotate_array(x) == [2, 3, 4, 1]   # => true
x == [1, 2, 3, 4]                 # => true
  
Data structure:
  -Arrays
Assisting structure?

Algorithm:
  -Set a rotated array to an empty array
  -Take values at index 1 to the size of the array
  -Add element at index 0 to -1
  -return rotated array

=end

def rotate_array(arr)
  arr.values_at(1..(arr.size - 1), 0)

end

def rotate_string(string)
  rotate_array(string.chars).join

end

def rotate_int(int)
  rotate_string(int.to_s).to_i

end

p rotate_int(12345)

p rotate_string('Hello')


# p  rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
# p  rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
# p  rotate_array(['a']) == ['a']
  
# x = [1, 2, 3, 4]
# p rotate_array(x) == [2, 3, 4, 1]   # => true
# x == [1, 2, 3, 4]                 # => true