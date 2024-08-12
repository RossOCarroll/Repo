=begin

Write a method that takes a sorted array of integers as an argument, and returns an array 
that includes all of the missing integers (in order) between the first and last elements 
of the argument.

Exsamples:
missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]) == []
missing([1, 5]) == [2, 3, 4]
missing([6]) == []

Input:
  -an array of sorted integers

Output:
  -an array of integers with all the missing numbers from the previous array

data structure
  -Arrays 

Algorythm:
  -Create an empty array
  -Iterate over input array
    -create a variable and set to current number
      -loop while number is less then the next element
      -Increment each number by 1
       -If number is less then the next number
        -append to empty array
  -return array




=end

def missing(array)
  result = []

  array.each_with_index do |num, idx|
    next_number = array[idx + 1]
    next if next_number.nil?

    current_num = num + 1

    while current_num < next_number
      result << current_num
      current_num += 1
    end
  end
  result
end


p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []