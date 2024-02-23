=begin

Copy Code
# Write a method that takes an array of integers and returns the
# two numbers that are closest together in value.

input:
  -An array of integers

Ouput:
  -An array with the 2 numbers that are the closest together in value

Rules:
  Implict:
    -Return the 2 numbers in an array
  
Questions:
  -Will there be an empty array input?

# Examples:

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]

# The tests above should print "true".

Data structure:
  -integers
  -Arrays

Assisting structure:
  -Hash

Algothrim:
  -Create an empty hash
  -interate over the input array
    -For each number in the input array
      -Iterate over the array
        -next if number 1 equals number 2
        -Append to the hash the key ar [num1, num2] and the value as num 1 - num 2
  -The min by the value of the hash should be returned

=end


def closest_numbers(array)
  closest_numbers = {}

  array.each do |num1|
    array.each do |num2|
      next if num1 == num2
      if (num1 - num2) < 0
        closest_numbers[[num1, num2]] = (num1 - num2) * -1
      else
        closest_numbers[[num1, num2]] = (num1 - num2)
      end
    end
  end

  closest_numbers.min_by {|arr, dif| dif }[0]
end


p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]