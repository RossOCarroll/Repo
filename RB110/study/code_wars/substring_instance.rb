=begin

omplete the solution so that it returns the number of times the search_text is found within the full_text. 
Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1

Input:
  -Two strings a full text and a search text

Ouput:
  -An integer representing the amount of times the search text shows up in the full text

Questions:
  -Will the full text string and search text be lower case?

Test Cases:

p solution('abcdeb','b') # 2
p solution('abcdeb', 'a')# 1
p solution('abbc', 'bb')# 1

Data Structure:
    -Strings
    -Arrays

Algorithm:
  -Create a sub string array
  -Iterate through the full text 
    -for each element starting at the following index to the end 
      -slice the array and append to the sub strings array
  -Count the amount of times that the search text appears in substrings array and return

=end


def solution(full_text, search_text)
  substrings = []

  full_text.chars.each_with_index do |letter, index|
    counter = 0
    while full_text.size > counter
      substrings << full_text[index..counter]
      counter += 1
    end

  end
  substrings.count(search_text)
end


p solution('abcdeb','b') # 2
p solution('abcdeb', 'a')# 1
p solution('abbc', 'bb')# 1