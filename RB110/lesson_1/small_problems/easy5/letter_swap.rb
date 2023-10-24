# Given a string of words separated by spaces, write a method that takes this string of words 
# and returns a string in which the first and last letters of every word are swapped.

# You may assume that every word contains at least one letter, and that the string will always 
# contain at least one word. You may also assume that each string contains nothing but words and spaces.

# Input:
#   -String

# Output:
#   -String

# Implicit requirements:
#   -Every word will contian at least one letter
#   -String will contian at lease one word
#   -String will contian only letters and spaces

# Exsamples / Test Cases:

# swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# swap('Abcde') == 'ebcdA'
# swap('a') == 'a'

# Data Structure:
#   -String
#   -Array

# Algorithim:
#   1. Set variable back_word_string assign to empty String
#   2. Take input string split each word into array and assign to split_array
#   3. Iterate over each elemnet in split_array
#     1. reverse wach element in split array
#     2. Append each reversed element to back_word_string
#   4. Join back_word_string and return

# def swap(string)
#   back_word_string = []
#   split_array = string.split

#   split_array.each do |word| 
#     first_letter = word[0]
#     last_letter = word[-1]
#     word[0] = last_letter
#     word[-1] = first_letter

#   back_word_string << word
  

#   end

#   back_word_string.join(' ')

# end

# puts swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# puts swap('Abcde') == 'ebcdA'
# puts swap('a') == 'a'


# Further exploration:

def swap_first_last_characters(a, b)
  a, b = b, a
end

def swap(words)
  result = words.split.map do |word|
    swap_first_last_characters(word[0], word[-1])
  end
  result.join(' ')
end



puts swap('Oh what a wonderful day it is') #== 'hO thaw a londerfuw yad ti si'
puts swap('Abcde') #== 'ebcdA'
puts swap('a') #== 'a'