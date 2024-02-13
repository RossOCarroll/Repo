=begin

Write a method that takes a sentence string as input, and returns the same string with any sequence of the 
words 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' converted to a string 
of digits.

Example:

Copy Code
word_to_digit('Please call me at five five five one two three four. Thanks.') 

Input:
  -A string sentence with numberic words 

Output:
  -A string with the number words turned into string integers

Question?
  -Soes case matter?


Data structure
  -String

Assisting structure:
  -Array 

Algorithm:
  -Split input string into an array
  -Iterate over each word in the the array and preform tranformation
    -Case word
      -When 'one' then then reassign word to '1'
      ect for the rest up to 'nine'
  -Join the array and return 

=end


DIGITS = { 'zero' => '0', 'one' => '1', 'two' => '2', 'three' => '3', 'four' => '4', 'five' => '5', 'six' => '6', 'seven' => '7', 'eight' => '8', 'nine' => '9', }

def word_to_digit(sentence)
  DIGITS.each do |word, digit|
    sentence.gsub!(/\b#{word}\b/, digit)
  end
  sentence
end



p word_to_digit('Please call me at five five five one two three four. Thanks.') 