=begin

ou are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples


Input:
  -An array of integers

Output:
  -The number of pairs within the input array

Rules:
  -Explicit:
    -the array maybe empty or contian no pairs in this cases return 0


Test cases // exsamples:


[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

Data structure:
  -Integers
  -Arrays

Algorithm:
  -Set a count variable to 0
  -Iterate over the input array
    -For each element iterate over array
      -Skip if the element share the same index
      -If num1 equals num2
        -Increment the count
  -Return the count 

=end


def pair_count(array)
  pair_array = []

  array.uniq.each do |num|
    pair_array.push(array.count(num) / 2)

  end
  pair_array.sum
end

p pair_count([1, 2, 5, 6, 5, 2])
p pair_count([1, 2, 2, 20, 6, 20, 2, 6, 2])