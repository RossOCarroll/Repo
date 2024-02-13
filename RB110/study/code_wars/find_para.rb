=begin
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at 
least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and 
punctuation.

Input:
  -A string : sentence

Output:
  -True or False if the input string is a pangram (if it contians all the letters in the alphabet)

Explicit:
  -Case is irrelevent
  -Output a boolean 

Questions?


Test cases

p pangram?("The quick brown fox jumps over the lazy dog.")
p pangram?("This is not a pangram.")

Data Structure:
  -String
  -Boolean
Assisting:
  -array

Algorithm:
  -Set a constant variable to an array of the alphabet lowercase
  -Set a letter count hash to an empty hash
  -Split the input string  into array
  -Transform every element in array to lowercase
  -Iterate over input array
    -if element is included in the alphabet 
      -append to letter count hash element and the count as key value pairs
  -if hash keys are the size of 26 and the values are greater then zero
    -Return true
  -Else
    -Return false

=end

ALPHABET = ('a'..'z').to_a

def pangram?(string)
  letter_count = {}
  letter_array = []

  string.chars.each {|element| letter_array << element.downcase }

  letter_array.select! {|element| ALPHABET.include?(element)}

  ALPHABET.each do |letter|
    letter_count[letter] = letter_array.count(letter) if letter_array.include?(letter)

  end
  letter_count.values.all? {|num| num > 0} && letter_count.keys.size == 26
end



p pangram?("The quick brown fox jumps over the lazy dog.")
p pangram?("This is not a pangram.")