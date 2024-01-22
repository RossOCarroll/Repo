=begin

Input:
  -An array of strings
Ouput
  -return an array of all charters that occur in all the given string in the array

Explicit:
  -

Algorithm:
  -set a result array to an empty array
  -Iterate through each sting in the input array
    -Iterate through each letter in the string
      -If the letter is included in the the other words
        -Appened to the result array
  -Return result

=end

def common_chars(array)
  result = []
  chars = array.shift.chars

  result = chars.select do |char|
    array.all? {|word| word.sub!(char, '')}
  end
  result
end


p common_chars(['bella', 'label', 'roller'])
p common_chars(['cool', 'lock', 'cook'])
p common_chars(['hello', 'goodbye', 'booya', 'random'])
p common_chars(['bella', 'label', 'roller'])