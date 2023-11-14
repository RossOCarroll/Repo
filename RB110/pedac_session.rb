=begin

Write a method that takes an array of consecutive letters as input and returns the missing letter.

p determine_missing_letter(['a','b','c','d','f']) == 'E'
p determine_missing_letter(['o','q','r','s']) == 'P'
p determine_missing_letter(['H','J','K','L']) == 'i'
p determine_missing_letter([]) == []

P & E
Input: collection of strings, each string a single alphabetical character
Output: missing letter in the opposite case; if the argument is an empty array, the output is an empty array. By "missing" we mean the letter that we'd expect to be present in alphabetical order; the input will skip one of these

Questions: What happens if we get mixed case inputs? In that instance, always return uppercase.
What happens if more than one letter is missing? If no letters are missing? You don't need to plan for these inputs. 

D
Input: Array of one-character strings
Intermediate: 
Output: Either a one-character string or an empty array
Assistant: a hash where keys are alph chars and the values are their positions in the alphabet. Or just an array of all the characters in the alphabet in order (but upper or lower case?)

A
generate an array of all characters from the first element to the last element in the given array, in alphabet sequence
compare this array to the argued array and delete all matches
Left with one element
=end