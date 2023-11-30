=begin

Given the array...

Copy Code
words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']
Write a program that prints out groups of words that are anagrams. Anagrams are words that have the same exact letters in them but in a different order. Your output should look something like this:

Copy Code
["demo", "dome", "mode"]
["neon", "none"]
#(etc)

Input:
  -An array of string elements that are words

Ouput:
  -A list of words for each word that are anagrams (array)

Rules:
  -Implicit:
    -the list of words for each element should be in a seperate array

Questions:
  -How to verify if a word is an anagram?
  -Is every element the same size

Data Structure:
  -Array
  -Strings

Algorithm:
  -Iterate through each element in the array
    -Set an anagrams to an empty array
    -Find every combination of of letters in the given element
    -append each variation to the anagrames array
    -Out put permutations

    .chars.permutation(4) {|x| p x.join}

=end

# def anagrames(array)
#   anagrams = [ ]

#   array.each do |word|
#     array.each do |comb|
#       anagrams << comb if word == comb.chars.sort.join
#     end
    
#   end
# end


def anagrames(array)
  result = {}

  array.each do |word|
    key = word.split('').sort.join
    if result.has_key?(key)
      result[key].push(word)
    else
      result[key] = [word]
    end

  end
  result.each_value do |value|
    p value
  end
end




words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
  'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
  'flow', 'neon']

  anagrames(words)