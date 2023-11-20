# Write a method that returns a list of all substrings of a string that are palindromic. 
# That is, each substring must consist of the same sequence of characters forwards as it does 
# backwards. The return value should be arranged in the same sequence as the substrings appear 
# in the string. Duplicate palindromes should be included multiple times.

# You may (and should) use the substrings method you wrote in the previous exercise.

# For the purposes of this exercise, you should consider all characters and pay attention 
# to case; that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. 
# In addition, assume that single characters are not palindromes.


# input:
#   -String of letters

# Ouput:
#   -Array of strings that are palindromes

# Rules:
#   Explicit:
#     -Return value should be in the same sequence as they appear in the string
#     -Should use the substrings method in the previous exsersize
#     -Results should be case sensitive

#   Implicit:
#     -When input string has no palendromes return an empty array

#   Questions:
#     -Input strings will have only letters and '-'?

# Test cases /  exsamples:

# palindromes('abcd') == []
# palindromes('madam') == ['madam', 'ada']
# palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# Data Structure:
#   -Strings
#   -Arrays

# Algorithm:
#   -Set a palendromes_array to an empty array
#   -Call the substrings method on the input array
#     -set to substrings
#   -Iterate through substrings 
#     -Select substrings that are equal when reversed
#     -append to palendromes_array 
#   return palendromes_array


def leading_substrings(string)
  sub_string_array = []
  index = 1

  loop do
    sub_string_array << string[0, index]

    index += 1
    break if index > string.size
  end

  sub_string_array

end


def substrings(input_string)
  all_sub_strings = []
  counter = 0
  indexed = 0

  loop do
    substring = input_string[indexed..-1]
    all_sub_strings << leading_substrings(substring)

    indexed += 1
    counter += 1
    break if counter == input_string.size

  end
  all_sub_strings.flatten

end

def palindromes(string)
  palindromes_array = []
  substrings = substrings(string)

  substrings.each do |substring|
    palindromes_array << substring if substring == substring.reverse && substring.size > 1

  end

  palindromes_array

end

#Further exploration

def palindromes2(string)
  modified_string = string.downcase.gsub(/(\W|\d)/, "")
  palindromes_array = []
  substrings = substrings(modified_string)

  substrings.each do |substring|
    palindromes_array << substring if substring == substring.reverse && substring.size > 1

  end

  palindromes_array

end


p palindromes2('abcd') == []
p palindromes2('madam') #== ['madam', 'ada']
 p palindromes2('hello-madam-did-madam-goodbye') 
#== [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
p palindromes('knitting cassettes') 
# #== [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]