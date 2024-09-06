=begin


Problem
  -The way to convert octal numbers to decimal is to use an base-8 in multiplication
  -Going from right to left, we multiple each digit of the number by 8 raised to a certian power
  -for the firs digit the power is 0 for the second the next is 1 this continues untiol we multiply each digit
    from the number
  -Valid octal numbers only include digits 0 through 7

  -A Octal class
    -A constructor method that accepts a string as an argument that represents an octal number
    -a method that converts the argument into decimal and returns it as a number
      -We should return 0 if the argument has invalid characters such as letters of the digits 8 or 9
    
  Data structure
    - Strings
    - integers
    - Array

Algorithm:
  -Constructor that accepts an argument representing a octal number 

  -Method to_decimal
    -If any charater is not 0 1 2 3 4 5 6 7 return 0
    -Set a starting sum to 0 
    -Reverse the digits 
    -Iterate over the digits
      -For the first digit multiple 8**0 and add to sum 
    -return the sum

=end

class Octal 
  
  def initialize(number)
    @number = number.chars
  end

  def to_decimal
    return 0 if @number.any? { |char| char =~ /[^0-7]/ }

    sum = 0

    @number.reverse.each_with_index do |digit, idx|
      sum += digit.to_i * (8**idx)
    end
    sum
  end
end


