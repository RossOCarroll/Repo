=begin


Problem: Group Anagrams
Write a method group_anagrams that takes an array of strings as input and groups the strings into anagrams. 
Two strings are anagrams if they contain the same characters in a different order.

Input:
  -An array of strings

Output:
  -An array with the string grouped together if theyre anagrams


Algorithm:
  -
  -Iterate over input array
    -for each string in the array
      -Iterate over each charater
        -Then check if each character is in the next word
          -If all characters are in the next word append to array 
            -Append array to a new array

=end


def anagram?(str1, str2)
  result = true

  str2.chars.each do |char|
    result = false if !str1.chars.include?(char)
  end
  result
end



def group_anagrams(strs)
  anagrams = []

  strs.each do |word1|
    array = []
    strs.each do |word2|
      
      next if word1 == word2
      array << word2 if anagram?(word1, word2)

    end
  anagrams << array

  end

anagrams
end

# Test cases
p group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
# Output should be [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
