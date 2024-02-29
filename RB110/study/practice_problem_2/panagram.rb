=begin

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps 
over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and 
punctuation.

-input:
  -A string sentence

Output:
  -True or false depending on if the sentence is a pangram(contians every letter in the alphabet)

Rules:
  Explicit:
    -Case doesnt matter
  

test cases:

p pangram?("This is not a pangram.")
p pangram?("The quick brown fox jumps over the lazy dog.")

Data Structure:
  -String
  -Boolean

Assisting structure
  -Array 

Algorithm:
  -Creat an array of the alphabet 
  -Iterate over the alphabet array
    -For each letter check if that letter is included in the input sentence
      -If letter is not included return false
  -Return true


=end


ALPHABET = ('a'..'z').to_a

def pangram?(string)
  ALPHABET.each do |letter|
    return false if !string.downcase.include?(letter)
  end
  true
end


p pangram?("This is not a pangram.")
p pangram?("The quick brown fox jumps over the lazy dog.")