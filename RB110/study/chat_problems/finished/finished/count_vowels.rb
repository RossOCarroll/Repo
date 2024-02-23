=begin

Algorithm:
  -Create an array of vowels 
  -Create a vowel count variable and set to 0
  -Iterate over the vowels array
    -If vowel is included in the input sentece
      -Incrment array by 1
  -
  
=end

VOWELS = %w(a e i o u)

def count_vowels(str)
  vowels_from_sentence = []

  str.chars.each do |letter|
    vowels_from_sentence << letter if VOWELS.include?(letter)
  end
  vowels_from_sentence.count
end

# Test cases
puts count_vowels("Hello, World!")  # Output should be 3 (o, o, o)
puts count_vowels("This is a test.")  # Output should be 4 (i, i, a, e)