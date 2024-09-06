=begin
Write a program that, given a word, computes the Scrabble score for that word.

Letter Values

You'll need the following tile scores:

Letter	Value
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10
How to Score

Sum the values of all the tiles used in each word. For instance, lets consider the word CABBAGE which has the following letters and point values:

3 points for C
1 point for each A (there are two)
3 points for B (there are two)
2 points for G
1 point for E
Thus, to compute the final total (14 points), we count:

Copy Code
3 + 2*1 + 2*3 + 2 + 1
=> 3 + 2 + 6 + 3
=> 5 + 9
=> 14

Problem:
  -Input: a string word for which we calculate the scrabble score
  -Output: an integer representing the scrabble score
  -invalid words should return 0
  -Program should be case insesitive.

Data Strucuture
  -String
  -integer
  -An array as a helper collection


Algorithm:
  -Create a scrabble class
    -A constructor method that accepts a string as an argument.
      -downcase the input word
    -A score method that calculates the scrabble score of the input string.
      -create a score variable and set it to 0
      -split input string 
      -iterate over the array
        -for current element
          -increment score depending on the element
    -Return Score

=end

class Scrabble 
  
  def initialize(word)
    @word = word
  end

  def score
    return 0 if @word.nil?
    scrabble_score = 0 

    @word.downcase.chars.each do |letter|
      case letter 
      when 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' then scrabble_score += 1
      when 'd', 'g' then scrabble_score += 2 
      when 'b', 'c', 'm', 'p' then scrabble_score += 3
      when 'f', 'h', 'v', 'w', 'y' then scrabble_score += 4
      when 'k' then scrabble_score += 5
      when 'j', 'x' then scrabble_score += 8 
      when 'q', 'z' then scrabble_score += 10
      end
    end

    scrabble_score
  end

  def self.score(word)
    scrabble_word = Scrabble.new(word)
    scrabble_word.score
  end
end
