=begin

# Write a function that masks proper nouns and numbers in a sentence. Use * to mask proper nouns and use # to 
mask numbers. You may assume that a sentence will not begin with a proper noun and will not end with a number 
or proper noun. Numbers can only be integers. -- Jung


Input:
  -A string sentence

Output
  -A string sentence with the proper nouns turned into '*' and the numebers turned into '#'

Rules
  -Explicit
    -Sentence will not begin with a proper noun and will not end with a number
    -Numbers will only be integers

# # Test cases
# puts mask_sentence("They bought 5 apples from John yesterday.")  # They bought # apples from **** yesterday.
# puts mask_sentence("Alice and Bob went to Paris in 2021 to have a vacation.") # Alice and *** went to ***** in #### to have a vacation.

Data structure
  -String

Assisting Structure:
  -Array

Algorithm:
  -Set a new sentence array to an empty array
  -Split the input string into an array
  -Iterate over the array
    -Skip the the first iteration
    -Check if the current word is capitalized
      -If true replace with word with '*' times the size of the word
    -Check if the current word is an number
      -if true rplace word with '#' times the size of the word
    -Append word to new sentence
  -Return new sentence

=end

# NUMBERS = (1..9).map(&:to_s)

# def mask_sentence(string)
#   new_sentence = []

#   string.split.each_with_index do |word, index|
#     new_sentence << word if index == 0
#     if word[0] == word[0].upcase
#       word = '*' * word.length
#       new_sentence << word
#     elsif NUMBERS.include?(word[0])
#       word = '#' * word.length
#       new_sentence << word
#     else  
#       new_sentence << word
#     end
#   end
#   new_sentence.join(' ')
# end



def mask_sentence(sentence)
  words = sentence.split(' ')
  masked_words = words.map.with_index do |word, index|
    # Check if the word is a proper noun (capitalized) and not the first word
    if word[0] == word[0].upcase && word[0].match(/[A-Z]/) && index != 0
      '*' * word.length
    # Check if the word is an integer
    elsif word.to_i.to_s == word
      '#' * word.length
    else
      word
    end
  end
  masked_words.join(' ')
end




p mask_sentence("They bought 5 apples from John yesterday.")  # They bought # apples from **** yesterday.
#puts mask_sentence("Alice and Bob went to Paris in 2021 to have a vacation.") # Alice and *** went to ***** in #### to have a vacation.