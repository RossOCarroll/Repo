=begin 
Write a program that will take a string of digits and return all the possible consecutive number series of a 
specified length in that string.

For example, the string "01234" has the following 3-digit series:

012
123
234
Likewise, here are the 4-digit series:

0123
1234
Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

Problem:
  -Input: a string of numerical digits and a number represting the desired length of the series
  -Output: Each possible series must be consecutive numbers from the orginal string. We are returning an array

  -We will need a Series class with 2 methods
    -a constructor that accepts a string of digits as an argument
    -a slices method that takes a number as an argument. That number is length of the possible series we must determine
    This method shoud return an array of arrays
    - We must throw an error of the series number is greater than the size of the string

Data Structure:
  -strings
  -integers
  -array

Algorithm:
  -Constructor method that saves a string of digits passed as an argument

  -Slices method
    -Accept a number as an argument - length
    -Throw an error if the length is greater then the size of input string
    -Create a result array
    -Split string and iterate
      -For each digit creat a substring the size of length
        -Append substring to result array
    -Return result array

=end

class Series 
  
  def initialize(digits)
    @digits = digits.chars.map(&:to_i)
  end

  def slices(length)
    raise ArgumentError if length > @digits.size 

    (0..(@digits.size - length)).map do |idx|
      @digits[idx, length]
    end
  end
end


digits = Series.new('982347')
p digits.slices(3)
