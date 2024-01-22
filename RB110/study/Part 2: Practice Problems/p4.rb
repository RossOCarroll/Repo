=begin
# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

Input:
  -An array of integers

Output:
  -An array of the two closest number in the input array 

Rules:
  Explicit:

  Implicit:
    -Return an array with the two selected numbers

  Ouestions?


# Examples:

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# The tests above should print "true"

data Structure:
  -Arrays

Algorithm
  -Set a result array variable to an empty array
  -Iterate over input array
    -Use the current element in iteration and iterate over input array again
      -Compare the current number with each element in input array to get the difference
      -If the diffence is less then the currten difference app end both elements to result array
  -Return array

=end

def turn_positive(num)
  if num < 0
    num * -1
  else
    num
  end
end

def closest_numbers(array)
  result = []
  differences_hash = {}
  array.each do |num|

    array.each do |num2|
      if num == num2 
        next
      else 
       current_difference = num - num2
       current_difference = turn_positive(current_difference)
       differences_hash[[num, num2]] = current_difference
      end
    end
  end
  differences_hash.select do |key, value|
    value == differences_hash.values.min
  end.keys[0]
end

p closest_numbers([5, 25, 15, 11, 20]) #== [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]
