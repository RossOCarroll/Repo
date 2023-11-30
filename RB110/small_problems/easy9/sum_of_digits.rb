=begin
Write a method that takes one argument, a positive integer, and returns the sum of its digits.

Input:
  -Positive integer

Ouput
  -A sum of the digits in input integer

Rules:
  Explicit:
    -Input will always be a positive integer

  Implicit: 
    - Return will be a positive integer


Questions:
  -Input always have at least 2 digits?

Test cases // Exsamples:

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45

Data Structure:
  -Integers
  Assisting:
    -Array
    -String?

Algorithm:
  -Split the input digits in to array
  -Take the sum of the array
  -Return sum


=end

def sum(number)
  array = number.to_s.split('')

  array.map! do |num|
    num.to_i
  end

  array.sum

  

end



p sum(23) #== 5
p sum(496) #== 19
p sum(123_456_789) #== 45