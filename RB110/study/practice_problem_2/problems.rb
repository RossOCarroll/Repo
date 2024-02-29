=begin

# # Write a function, negate, that converts all "yes" words to "no" and "no" words to "yes" in a sentence. 
The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with 
., ?, ,, or !. -- Samuel

def negate(string)
  words = string.split
  words.map do |word|
    capitalized = word == word.capitalize


    if word[0..1].downcase == 'no'
      tail = word[2]
      tail = '' if tail.nil?
      next word if ('A'..'Z').include?(tail) || ('a'..'z').include?(tail)
      new_word = 'yes' + tail
      capitalized ? new_word.capitalize : new_word
    elsif word[0..2].downcase == 'yes'
      tail = word[3]
      tail = '' if tail.nil?
      next word if ('A'..'Z').include?(tail) || ('a'..'z').include?(tail)
      new_word = 'no' + tail
      capitalized ? new_word.capitalize : new_word
    else
      word
    end
  end.join(' ')
end

# # Test cases

# puts negate("Yes, I said no but now I say yes.") # "No, I said yes but now I say no."
# puts negate("no way, yes way!") # "yes way, no way!"
# puts negate("Yesterday is not today?") # "Yesterday is not today?"
# puts negate("No, I do not know!") # "Yes, I do not know!"


# Write a function that masks proper nouns and numbers in a sentence. Use * to mask proper nouns and use # to mask numbers. You may assume that a sentence will not begin with a proper noun and will not end with a number or proper noun. Numbers can only be integers. -- Jung

# Input:string
# Output:string
# Rules: replace each character of every proper noun word with * except if the proper noun starts the sentence.  replace each character of numeric string with '#'
# Data structure: array
# Algorithm:
# --split each word 
#   for words index 1..-1
#   --split each word into characters
# --if first character of word is uppercase
# #   --replace each character with * 

# def mask_sentence(str)
#   numbers = ('0'..'9').to_a
#   upper_case = ('A'..'Z').to_a
#   str = str.split
#   str[1..-1].map! do |word|
#     if upper_case.include?(word[0])
#       word.sub(word, '*' * word.size)
#     elsif numbers.include?(word[0])
#       word.sub(word, '#' * word.size)

#     else
#       word
#     end
#   end
#   str[0] + str[1..-1]
# end

# def mask_sentence(sentence)
#   words = sentence.split(' ')
#   masked_words = words.map.with_index do |word, index|
#     # Check if the word is a proper noun (capitalized) and not the first word
#     if word[0] == word[0].upcase && word[0].match(/[A-Z]/) && index != 0
#       '*' * word.length
#     # Check if the word is an integer
#     elsif word.to_i.to_s == word
#       '#' * word.length
#     else
#       word
#     end
#   end
#   masked_words.join(' ')
# end

# # Test cases
# puts mask_sentence("They bought 5 apples from John yesterday.")  # They bought # apples from **** yesterday.
# puts mask_sentence("Alice and Bob went to Paris in 2021 to have a vacation.") # Alice and *** went to ***** in #### to have a vacation.

# # Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there's none return -1. All numbers in the array will be integers greater than 0. -- Debby

# Write a function that returns the count of triple of numbers that have 2 odd numbers and 1 even. If there's none return -1. All numbers in the array will be integers greater than 0. -- Debby

# Test cases
# puts count_triples([1, 2, 3, 4]) # Expected output: 2
# puts count_triples([2, 4, 6, 8]) # Expected output: -1
# puts count_triples([1, 3, 5, 7]) # Expected output: -1
# puts count_triples([1, 2, 3, 4, 5, 6]) # Expected output: 9

# Understand the Problem
# -input: Array of Integers
# -output: Integer
# -rules/requirements:
#  -return the count of triple of numbers that have 2
#   odd numbers and 1 even
#  -return 1 if there's none 
#  -All numbers in the array will be integers greater #   than 0

# Examples and Test Cases
# puts count_triples([1, 2, 3, 4]) # Expected output: 2
# puts count_triples([2, 4, 6, 8]) # Expected output: -1
# puts count_triples([1, 3, 5, 7]) # Expected output: -1
# puts count_triples([1, 2, 3, 4, 5, 6]) # Expected output: 9

# Data Structure
# -Array to store the multiples

# Algorithm
# -Define a method, count_triples that takes an Array
#  as an argument 
#  -Create a local variable, evens, that counts how many even numbers there are
# -Create a local variable, odds, that counts how many odd numbers there are
#  -Iterate through the given Array
#   -If the number is even, increment even up by 1
#   -Else, if the number is odd, increment the number 
#    up by 1
# -Calculate the number of unique combinations there # are for 2 odds 
# -Cacluate the number of unique combinations there are for 1 even
#-Multiply the two caluclated numbers above by each other to 
# find the number of triples 

# [1, 2, 3, 4, 5]
#  2
#    3
# def count_triples(arr)
#   count = 0

#   (0...arr.length - 2).each do |i|
#       (i + 1...arr.length - 1).each do |j|
#           (j + 1...arr.length).each do |k|
#               odd_count = [arr[i], arr[j], arr[k]].count(&:odd?)
#               count += 1 if odd_count == 2
#           end
#       end
#   end

#   count > 0 ? count : -1
# end

# Code

# # Test cases
# puts count_triples([1, 2, 3, 4]) # Expected output: 2
# puts count_triples([2, 4, 6, 8]) # Expected output: -1
# puts count_triples([1, 3, 5, 7]) # Expected output: -1
# puts count_triples([1, 2, 3, 4, 5, 6]) # Expected output: 9

# # Implement a function, capitalize, that capitalizes all words in a sentences. However, only capitalize if the 
word is followed by a word starting with a vowel (for Ruby don't use capitalize). - Ji

# =begin
# input - a string; sentence consisting of several words
# output - a string with some words capitalized (only words that are followed by a word starting with a vowel)

# notes:
# -CANNOT use capitalize method
# -need to check the first letter of the following word to see if it's a vowel (aeiou)
# -the last word will always be NOT capitalized

# *algorithm
#   -split the `sentence` into `words`
#   -iterate through and transform `words` with index. for each `word`
#     -leave the last word as it is, do not perform the below check
#     -check whether the next word starts with a vowel
#       -if so, need to replace the first letter of current word to uppercase letter
#       -if not, leave the word as it is
#   -join the transformed array back into a string with empty space between words
# =end

# def capitalize(sentence)
#   vowels = %w(a e i o u)
#   words = sentence.split
#   capitalized_words = words.map.with_index do |word, index|
#     next word if index == words.size - 1
#     if vowels.include?(words[index + 1][0])
#       word[0].upcase + word[1..-1]
#     else
#       word
#     end
#   end
#   capitalized_words.join(' ')
# end

# # Test cases
# puts capitalize("hello apple world") # "Hello apple world"
# puts capitalize("this is an umbrella") # "This Is An umbrella"
# puts capitalize("every vowel starts an echo") # "every vowel Starts An echo"
# puts capitalize("under the oak tree") # "under The oak tree"
# puts capitalize("a quick brown fox") # "a quick brown fox"