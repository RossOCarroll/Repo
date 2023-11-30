=begin

Write a method that takes a string as an argument, and returns an Array that contains every 
word from the string, to which you have appended a space and the word length.

You may assume that words in the string are separated by exactly one space, and that 
any substring of non-space characters is a word.

Input:
  - String of words

Output
  -Array that contians the words of the strings appened with a space and the length of the word

Rules

Explicit:
  -Assume that words are seperated by exactly one space and any string of non- spave charaters
  is a word

Impicit:
  -An empty string returns an empty array

Test cases / Exsamples:

word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

word_lengths("") == []

Data Structure:
  -String
  -Array

Algorithm
  -Set a result array to empty array
  -Split the input string and iterate over elements
    -Take the length of each element 
    -Concatenate element with a space and the length
    -append to result array
  -Return result array



=end

def word_lengths(string)
  result_array = []

  string.split.each do |word|
    result_array << "#{word} #{word.size}"

  end

  result_array

end

p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []