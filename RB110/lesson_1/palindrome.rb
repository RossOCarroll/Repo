#Input: String
#Output: New string
#   Rule:
#    Explicit:
#     - Return a new string with the palendromes in Upper case
#     - Palindromes are case sensetive
      
#    Implicit:
#     - The return string should be a new string
#     - If the input string is an empty string we should return an empty string

# Input: String
# Output: An array of substrings
#   Rules:
#     Explicit: 
#       -Return an array of substrings of all the palindromes within the given string
#       -Palindromes are case sensitive
# #    
#     Implicit
# #     -If no palindromes are present then return an empty array
        # -If an empty string is input return an empty array

# 
# Algorithm:
#   Palindrome_substrings method
#   ============================
# 
#   - intialize a result variable and assign to an empty array
#   - create an array named substring_arr that contians all of the substrings
#     of the input string that are at least 2 characters long.
#   - loop through the words in the substring_arr array
#   - if the word is a palindtrome, append it to the sub array
#   - return the result array
# 
#   for each starting index from 0 through the next to last index position
#     for each substring length from 2 until there are no substring of that length
#       extract the substring of the indicated length starting at the indicated index position
#     end of inner loop
#    end of outer loop

#   Substrings Method
#   =================
# 
#   - create an empty array called 'result' that will contian all required substrings
#   - create a `starting_index` variable (value 0) for the starting index of a substring
#   - start a loop that iterates over `starting_index` from `0` to the length of the string minus 2
#     - create a `num_char` variable (value `2`) for the length of the substring
#     - start an inner loop that iterates over `num_chars` from `2` to `string.length - starting index`
#       - extract a substring of length `num_char` from `string` starting at `starting_index`
#       - append the extracted substring to the `result` array
#       - increment the `num_char` variable by 1
#     - end the inner loop
#     - increment the `starting_index` variable by `1`
#   - end the outer loop
#   - return the result array
# 
#   Is_palindrome method
#   ====================
#
#  - Inside the is_palindrome? method, cheack weather the string 
#    is equal to the string in reversed value. Use the String#reverse method
# 
# 
# 
# Formal Pseudo-code
# 
#       Given a string named `string`
#  
#   SET result = []
#   SET starting_index = 0
# 
#   WHILE staring_index == string.length - 2
#     SET num_char = 2
#     WHILE num_char <= length of string - starting_index
#       SET substring = num_chars characters from the string starting at index starting_index
#       append substring to result array
#       SET num_char = num_char + 1
# 
#      SET starting_index = starting_index + 1
# 
#    RETURN result
# 
# END

def is_palindrome?(str)
  return str == str.reverse
end

def substrings(str)
  result = []
  starting_index = 0

  while (starting_index <= str.length - 2 )
    num_chars = 2
    while (num_chars <= str.length - starting_index)
      substring = str.slice(starting_index, num_chars)
      result << substring
      num_chars += 1
    end
    starting_index += 1
  end
  result
end

def palindrome_substrings(str)
  result = []
  substring_arr = substrings(str)
  substring_arr.each do |substring|
    result << substring if is_palindrome?(substring)
  end
  result
end

p palindrome_substrings("supercalifragilisticexpialidocious"); # ["ili"]
p palindrome_substrings("abcddcbA");   # ["bcddcb", "cddc", "dd"]
p palindrome_substrings("palindrome"); # []
p palindrome_substrings("");           # []