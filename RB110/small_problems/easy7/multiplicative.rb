# Write a method that takes an Array of integers as input, multiplies all the numbers 
# together, divides the result by the number of entries in the Array, and then prints 
# the result rounded to 3 decimal places. Assume the array is non-empty.



# input:
#   -Array of integers

# Output:
#   -Float result of multiples of the input numbers divided by the number of entries
#     Result should have 3 decimal points

# Rules:
#   -Implict requirements
#     -If inout array has one element that element should be returned
#   -Explicit requirments:
#     -Assume array is non-empty
#     -rounded to 3 decimal points

# Questions:
#  -Are we returning a string

#   Test Cases / Exsamples:

#   show_multiplicative_average([3, 5])                # => The result is 7.500
#   show_multiplicative_average([6])                   # => The result is 6.000
#   show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

#   Data Structure:
#     -Array
#     -Float

#   Algorrythim:
#     -if array size is equal to 1 return element to as a Float with 3 decimal places
#     -Save size of array to size
#     -Multiply numbers together save to multiplied save as float
#     -Devide multplied by size of array
#     - return result with 3 decimal points


def show_multiplicative_average(array)
  size = array.size

  if array.size == 1 then single_result = array[0].round(3).to_f
    return sprintf('%.3f', single_result)
  else 
    multiplied = array.inject(:*)
    result = multiplied.to_f / size.to_f
    return sprintf('%.3f', result)
  end
end


def show_multiplicative_average2(numbers)
  product = 1
  numbers.each { |number| product *= number }
  average = product / numbers.size
  puts "The result is #{format('%.3f', average)}"
end

p show_multiplicative_average2([3, 5])                # => The result is 7.500
p show_multiplicative_average2([6])                   # => The result is 6.000
p show_multiplicative_average2([2, 5, 7, 11, 13, 17]) # => The result is 28361.667