=begin


Output
You are going to be given an array of integers. Your job is to take that array and find an index N where 
the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is 
no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

Input:
  -an array of integers

Ouput:
  -The index where the integers on the left side of the array equal the integers on the right side of the array

Explicit:
  -

Test cases:
p find_even_index([1,2,3,4,3,2,1])#,3)
p find_even_index([1,100,50,-51,1,1])#,1)
p find_even_index([1,2,3,4,5,6])#,-1)
p find_even_index([20,10,30,10,10,15,35])#,3)
p find_even_index([20,10,-80,10,10,15,35])#,0)
p find_even_index([10,-80,10,10,15,35,20])#,6)
p find_even_index(Array(1..100))#,-1)
p find_even_index([0,0,0,0,0])#,0,"Should pick the first index if more cases are valid")
p find_even_index([-1,-2,-3,-4,-3,-2,-1])#,3)


Data Structure:
  -Arrays
  -integers

Algorithm:
  -Set a result variable to -1
  -Iterate over input array with index
    -At first iteration we need to comapare the right side to 0
    -Get the sum of the left on the index and the sum of the right of the index
      -left from array 0 to index - 1
      -Right array at index plus 1 to -1
      -If left equals righ side 
        -Reassign result to index

  -Return index


=end

def find_even_index(array)
  return 0 if array.all?(0)
  result = -1

  array.each_with_index do |num, index|
  if index == 0
    left = 0
  else
    left = array[0..(index -1)].sum
  end
  right = array[(index + 1)..-1].sum
  
  if left == right
    result = index
  end

  end
  result
end




p find_even_index([1,2,3,4,3,2,1])#,3)
p find_even_index([1,100,50,-51,1,1])#,1)
p find_even_index([1,2,3,4,5,6])#,-1)
p find_even_index([20,10,30,10,10,15,35])#,3)
p find_even_index([20,10,-80,10,10,15,35])#,0)
p find_even_index([10,-80,10,10,15,35,20])#,6)
p find_even_index(Array(1..100))#,-1)
p find_even_index([0,0,0,0,0])#,0,"Should pick the first index if more cases are valid")
p find_even_index([-1,-2,-3,-4,-3,-2,-1])#,3)