# rubocop disable:Layout/LineLength
=begin
Write a program that takes a word and a list of possible anagrams and selects the correct sublist that contains 
the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", 
the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

Problem:
  -Our input is a word and our output is a list of words. This first input is a pattern string, and the second inputs is an array of strings that
  maybe anagrams to the input word.
  -From the instructutions we can see tht words are arangrams of each other when they have the same number of letters
  and the same exact letters.
    Anagram:
      -Must be the same length as the pattern string
      -Must be have the same exact letters
      -same exact number of letters
      -A word is not a anagram of itself.
      -Anagrams are not case sensetive
  -We need to output an array/ empty array if no anagrams are found

data structure
  -String
  -Arrays

  Algorythm:
  -Create an Anagram class
    -A constructor method that takes a pattern word as an argument.
    -A match method that takes a list of words as an argument and tests the list aginst the pattern word
      -Create an anagram array
      -iterate over the input array of words
        -If patttern word when sorted is equal to the current word sorted
          -Add word to our anagram array
      -Return anagram array

=end
# rubocop enable:Layout/LineLength

class Anagram

  def initialize(pattern_word)
    @pattern_word = pattern_word.downcase
  end

  def match(word_array)
    sorted_pattern = @pattern_word.chars.sort.join
    word_array.select do |word|
      word_downcased = word.downcase
      next if word_downcased == @pattern_word
      sorted_word = word_downcased.chars.sort.join
      sorted_word == sorted_pattern
    end
  end
end
