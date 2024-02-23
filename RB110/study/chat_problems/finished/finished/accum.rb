=begin

input:
  -A string

Output:
  -A modified string with each element multipied by the order its in and capitaized and each element seperated by a '-'

Rules:
  Implicit:

Algorithm:
  -Set a result variable to an empty array
  -Seperate the input string into array
  -Set a multiplier to 1
  -Iterate over that array to transform each element
    -for each element times multiplier 
    -increment multipler by 1
    -Capitalize each element
  -Join array with '-' and return

=end


def accum(string)
  multiplier = 0
  new_array = string.chars.map do |ele|
    multiplier += 1
    ele * multiplier
  end
  new_array.map do |ele| 
    ele.capitalize!
  end
  new_array.join('-')
end




p accum('abcd') #'A-Bb-Ccc-Dddd'
p accum('zrqsdv') #'Z-Rr-Qqq-Ssss-Ddddd-Vvvvvv'
