=begin

There is an array with some numbers. All numbers are equal except for one. Try to find it!

find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.


Input:
  -An array of integers

Output:
  -Return the unique integer within the input array

Explicit:
  -Array will contian at least three charaters

Test cases:
p find_uniq([1,1,1,1,0])#, 0)
p find_uniq([ 1, 1, 1, 2, 1, 1 ])#, 2);
p find_uniq([ 0, 0, 0.55, 0, 0 ])#, 0.55);


Data structure:
  -Array
  -Integers

Algorithm:
  -Iterate over input array
    -Get the count of the current numbers occurances in input array
      -If count is equal to 1 return character

=end

def find_uniq(array)
  unique_array = array.uniq
  unique_array.each do |num|
    return num if array.count(num) == 1
  end
end


p find_uniq([1,1,1,1,0])#, 0)
p find_uniq([ 1, 1, 1, 2, 1, 1 ])#, 2);
p find_uniq([ 0, 0, 0.55, 0, 0 ])#, 0.55);