=begin

Complete the greatestProduct method so that it'll find the greatest product of five 
consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

-input 
  -A string representing a number

-output:
  -the greatest product of five consequtive numbers

Implicit:
  -Return an integer

Test cases :
p greatest_product("123834539327238239583")#, 3240)
p greatest_product("395831238345393272382")#, 3240)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("02494037820244202221011110532909999")#, 0


Data struture:
  -String
  -Integers

Assisting:
  -Array

Algorithm:
  -Set a substring variable to 0
  -Set a largest product variable to 0
  -Find all the consecutive substrings the legth of five
    -Set a start index to 0 and a end index to 4
    -From the start index to the end index slice from the input string
      -append to sub strings
  -Iterate over substrings
    -Split each sub string into an array
    -Transform each element into an integer
    -Get the product of all elements in sub array
      -if product is greater then largest product
        - reassign product to largest product
  -Return largest product

=end

def every_fifth(string)
  substrings = []
  start_index = 0
  end_index = 4

  until end_index >= string.size
    substrings << string[start_index..end_index].chars.map {|num| num.to_i }.reduce(:*)
    start_index += 1
    end_index += 1
  end
  substrings
end


def greatest_product(string)
  every_fifth(string).max

end



p greatest_product("123834539327238239583")#, 3240)
p greatest_product("395831238345393272382")#, 3240)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("92494737828244222221111111532909999")#, 5292)
p greatest_product("02494037820244202221011110532909999")#, 0
