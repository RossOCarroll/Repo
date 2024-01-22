=begin


input:
  -An array of integers

Output:
  -The maximum sum of consqutive numbers in the array

Explicit requirments:
  -If the array is made up of on;y negative numbers, return an empty array
Implicit:
  -If array contians only one positive integer return number
  -If array only contians one negative number return 0
  -if the array is empty return 0


Data structure:
  -Arrays 
  -integers

Algorithm:
  -Set a max_sums variable to an empty array
  -Set an end index to 1
  -iterate over each element in input array
    
    -loop times the size of the array - 1
      -set a max sum
      -from element to end index get the sum
      -append the sum to max_sums array
      -increment index 
  -return the max in max sums


=end

def max_sequence(array)
  return 0 if array.all? {|num| num < 0 }


  max_sums = []

  (0..array.size).each do |index1|
    (index1..array.size).each do |index2|
      max_sums << array[index1..index2].sum
    end
  end
  max_sums.max
end


p max_sequence([])
p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
p max_sequence([11])
p max_sequence([-32])
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4])
p max_sequence([])