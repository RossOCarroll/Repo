=begin

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples

[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

-input
  -An array of integers

-Ouput
  -An integer that represents how many pairs are in the array

Explicit
  -Input array can be empty or contian one element, in this case return 0
  -If there are more than 1 pair of a certian number count the pairs

Questions:

Test cases 
p pairs([1, 2, 5, 6, 5, 2]) # 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) # 4
p pairs([0, 0, 0, 0, 0, 0, 0]) # 3 
p pairs([1000, 1000]) # 1
p pairs([]) # 0
p pairs([54]) # 0


Data Structure
  -Arrays
  -Integers

Algorithm:
  -If input array's size is less then 1 return 0
  -Set a pair count variable to 0
  -Iterate over input array
    -count the number of occurances of that number in the array
      -if the count is even and greater then 1
        -Divide the count by 2 to get the number of pair
          -add this number to the pair_count
      -if the count is odd and greater then 1
        -subtract the count by 1 and devide the number by 2
        -Add this number to the pair count
  -Return pair count

=end

def pairs(array)
  return 0 if array.size <= 1
  pair_array = []

  array.uniq.each do |num|
    pair_array.push(array.count(num) / 2)
  end
  pair_array.sum
end


p pairs([1, 2, 5, 6, 5, 2]) # 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) # 4
p pairs([0, 0, 0, 0, 0, 0, 0]) # 3 
p pairs([1000, 1000]) # 1
p pairs([]) # 0
p pairs([54]) # 0

