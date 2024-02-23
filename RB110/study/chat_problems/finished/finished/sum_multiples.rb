=begin

Sum of Multiples: Write a Ruby method that takes a positive integer n and returns the sum of all multiples of 3 
or 5 that are less than n.

input:
  -an integer

Output:
  -Sum of all multiples of 3 or 5 that are less than the input number

Rules:
  Explicit:
    -

Questions?
  -Will there be an input where no multiples of 3 or 5 exist?

Data structure:
  -Integers

Assisting structure:
  -Array

Algorithm:
  -Create an array from 1 up to the input number minus 1
  -Iterate over the array
    -Check if the current number is a multiple of 3 or 5
      -If true the select that number
  -With new selected array add the sum of numbers


=end


def sum_of_multiples(num)
  multiples_array = 1.upto(num - 1).to_a

  multiples_array.select do |number| 
    number % 3 == 0 || number % 5 == 0
  
  end.sum

end

# Test cases
p sum_of_multiples(10) # Expected output: 23 (3 + 5 + 6 + 9)
p sum_of_multiples(20) # Expected output: 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)