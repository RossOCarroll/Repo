=begin

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the 
given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

input:
  -string of digits

Output:
  -An integer representing the greatest product from 5 consecutive digits.

Rules:
  Implicit:
    -Return a integer


Questions:
  -A product is the result of multipling two or more numbers


Test Cases // exsamples:

p greatest_product("123834539327238239583")#, 3240)
p greatest_product("395831238345393272382")#, 3240)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("02494037820244202221011110532909999")#, 0)

Data Structure:
  -String
  -integer

Asssisting structure:
  -Array 

Algorithm
  -Set a start and end index variables
    -Start at 0 
    -End index will start at 4
  -Result array to empty array
  -Iterate over the input string
    -Splice from start index to end index
    -Split current substring into a array
    -Convert the string elements into integers
    -Get the product of the substring
      -Append to the result array
    -Break out of iteration if end index equals the lenth fo the string
  -Return the max number from result array

=end


def greatest_product(string)
  products = []
  start_index = 0
  end_index = 4 

  until end_index >= string.length
    current_nums = string[start_index..end_index]
    products << current_nums.split(//).map {|num| num.to_i }.reduce(:*)
    start_index += 1
    end_index +=1
  end
  products.max
end

p greatest_product("123834539327238239583")#, 3240)
p greatest_product("395831238345393272382")#, 3240)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("02494037820244202221011110532909999")#, 0)

