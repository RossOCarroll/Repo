=begin

Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

input:
  -integer

output:
  -string with a dash before and after each odd integer

Rules:
  explicit:
    -return a string
    -do not begin or end a string with a dash
  implicit:
    -if is a single digit return to string
    -if integer is negative then return a positive digit to string

Ouestions?

Test cases / exsamples

274 -> '2-7-4'
6815 -> '68-1-5'

data structure:
  -integers
  -strings

  Assisting structure:
      -Array

Algorithm
  -Turn input integer into a string
  -Seperate string into array .. string array
  -Set a result array
  -iterate through string array
    -if integer is odd 
      -concatinate dashs on eith side
      -append to result array
  -if array begins or ends with a dash delete
  -join array and return

=end

def dashatize(num)
  dash_result = []
  array = num.to_s.chars
  array.each do |digit|
    if digit.to_i.odd?
      dash_result << '-' 
      dash_result << digit
      dash_result << '-'
    else
      dash_result << digit
    end
  end

  dash_result.delete_if do |element|
    element == '-' && dash_result[0] == element || 
  end
  
  dash_result.join
end


p dashatize(274)
p dashatize(5311)
p dashatize(86320)
p dashatize(974302)