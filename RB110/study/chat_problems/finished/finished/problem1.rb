=begin
  

# Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once.



input:
  -An array of integers

Output:
  -An array of integers representing how many numbers are smaller then the current number

Rules:
  Explicit
    -Only unique values should be counted
  Impicit:
    -If there is only 1 number in array return an array with 0

Questions?
  -Will an empty array be input?


# Examples:

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4])
                            == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".


Data Structure:
  -integers
  -Arrays

Algorithm:
  -Set a result array to an empty array
  -Create a uniq array to iterate over
  -Create a counter
  -Iterate over the input array
    -For each element iterate over unique array
      -If current number in input array is greater then current number in unique array 
        -incremnt counter
    -Append counter to result array

=end

def smaller_numbers_than_current(input_array)
  result_array = []
  uniq_array = input_array.uniq

  input_array.each do |num1|
    counter = 0
    uniq_array.each do |num2|
      counter += 1 if num1 > num2
    end
    result_array << counter

  end
  result_array
end



p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]
