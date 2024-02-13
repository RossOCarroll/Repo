=begin


# Find all triple of words in the sentence that have at least 2 vowels in them. -- Ross 

# Test cases
puts find_triple_with_vowels("This is a test sentence with some vowels").inspect # [["sentence", "some", "vowels"]]
puts find_triple_with_vowels("The quick brown fox jumps over the lazy dog").inspect # []
puts find_triple_with_vowels("Beautiful, bright, and sunnier days are lovely").inspect 
# [
#  ["Beautiful,", "bright,", "sunnier"],
#  ["Beautiful,", "bright,", "lovely"],
#  ["Beautiful,", "sunnier", "lovely"],
#  ["bright,", "sunnier", "lovely"]
# ]


Input:
  -A string sentence

Ouput:
  -An array of strings that contian at least two vowels in them

Data structure:
  -Strings
  -Arrays

Algorithm:
  -Create a vowel array contian a e i o u
  -Set a triples to an empty array
  -Set a vowel counter to 0
  -Split the input string into words
  -Iterate over words array
    -Iterate over each letter in the word array
      -if the letter is inclued in vowels array
        -increment counter
    -if counter is 2 or greater append to triples array

  -Return result array


=end

VOWELS = %w(a e i o u)


def find_triple_with_vowels(sentence)
  result_array = []

  sentence.split.each do |word|
    vowel_counter = 0
    word.chars.each do |letter|
      vowel_counter += 1 if VOWELS.include?(letter.downcase)
    end
    result_array << word if vowel_counter >= 2
  end
  result_array
end

puts find_triple_with_vowels("This is a test sentence with some vowels").inspect # [["sentence", "some", "vowels"]]
puts find_triple_with_vowels("The quick brown fox jumps over the lazy dog").inspect # []
puts find_triple_with_vowels("Beautiful, bright, and sunnier days are lovely").inspect 
  