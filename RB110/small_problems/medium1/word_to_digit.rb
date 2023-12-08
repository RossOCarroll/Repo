=begin
Write a method that takes a sentence string as input, and returns the same string with 
any sequence of the words 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
'eight', 'nine' converted to a string of digits.

Input:
  -String that is a sentence

Output:
  -The same string with words of numbers changed to string digits

Rules:
  Explicit:
    -Return the same string
  Implicit

Ouestions:
  -will the input string have double digit numbers?
  -Case sensitive?

Test cases / Exsamples:
  word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

Data structure:
  -String
  Assiting structure
  -array

Algorithm
  -Split input string into an array of words
  -Iterate over wach word
    -If word is equal to a digit reperestation
      - Reassign to digit representation
  -Join array back together
  -Return string

=end

# def word_to_digit(sentence)
#   sentence.split.map! do |word|
#     case word
#     when 'one' || 'one.'
#       word = '1'
#     when 'two' || 'two.'
#       word = '2' 
#     when 'three' || 'three.'
#       word = '3'
#     when 'four' || 'four.'
#       word = '4'
#     when 'five' || ''
#       word = '5'
#     when 'six'
#       word = '6'
#     when 'seven'
#       word = '7'
#     when 'eight'
#       word = '8'
#     when 'nine'
#       word = '9'
#     else 
#       word
#     end
#   end.join(' ')
# end

DIGIT_HASH = {
  'zero' => '0', 'one' => '1', 'two' => '2', 'three' => '3', 'four' => '4',
  'five' => '5', 'six' => '6', 'seven' => '7', 'eight' => '8', 'nine' => '9'
}.freeze

def word_to_digit(words)
  DIGIT_HASH.keys.each do |word|
    words.gsub!(/\b#{word}\b/, DIGIT_HASH[word])
  end
  words
end




p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'