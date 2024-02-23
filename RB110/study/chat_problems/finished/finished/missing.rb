=begin

Find Missing Number: Write a Ruby method that takes an array of integers from 1 to n, where n is the length of 
the array with one missing number, and returns the missing number.



Example: find_missing_number([1, 2, 4, 5, 6]) should return 3.

Input:
  -An array of integers from 1 to n

Ouput:
  -The missing integer

Explicit

Questions:
  -Will the input array always be consecutive with one number missing?

Data structure:
  -array
  -integers

Algorithm:
  -Create an array with all the consective numbers
    -From 1 up to the element at index -1 from the input array
  -Create a variable missing number to 0
  -Compare that array with the input array 
  -Return missing number

=end


def find_missing_number(array)
  compared_array = []

  1.upto(array[-1]) do |num| 
    compared_array << num 
  end

  missing = compared_array - array
  missing[0]
end


p find_missing_number([1, 2, 4, 5, 6])