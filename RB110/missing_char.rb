=begin

Write a method that takes an array of consecutive letters as input and returns the missing letter.

p determine_missing_letter(['a','b','c','d','f']) == 'E'
p determine_missing_letter(['o','q','r','s']) == 'P'
p determine_missing_letter(['H','J','K','L']) == 'i'
p determine_missing_letter([]) == []


P & E
What do we mean by "missing letter"? In test cases, missing in terms of alphabetical order.

Why are results in opposite case to other argued letters? To what extent does our method need to be case-sensitive?

Will arrays contain unexpected integers or other other data types? 

What's a letter? one-character alphabetical string 

When we have an empty input array, return an empty array

What if we have mixed case inputs? This will not happen.

D Input: an array of string elements
Output: either a one-character string or an empty array (if we get an empty array argument)
Intermediate: array of all alphabetical characters in order
array of first argued char to last argued char, with no missing char.


A 
use some helper method to check whether the input array is empty. Do that at the start, and immediately return an empty array if so.
Create an array of first argued char to last argued char, with no missing char. e.g. ['a','b','c','d', 'e', 'f']
  - create an array of only the first character ['a']
  - add the next array element, the next character in alphabetical order ['a', 'b']
  - keep doing this until we add the last element
Compare this new array to our input array to find the missing element.
check the case of the missing element, and reverse the case.


=end

def determine_missing_letter(array)
  return [] if array.empty?

  comparing_array = (array[0]..array[-1]).to_a
  missing_character = comparing_array - array

  if missing_character[0] == missing_character[0].upcase
    missing_character[0].downcase
  else
    missing_character[0].upcase
  end
end

p determine_missing_letter(['a','b','c','d','f']) == 'E'
p determine_missing_letter(['o','q','r','s']) == 'P'
p determine_missing_letter(['H','J','K','L']) == 'i'
p determine_missing_letter([]) == []