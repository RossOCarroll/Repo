=begin

Complete the solution so that it returns the number of times the search_text is found within the full_text. 
Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

input:
  -A string
  -Search text

output:
  -An integer representing how many time the seach text shows up in the input string


Test Cases // exsamples:


full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1


Data structure:
  -String

Assiting Structure: 
  -Array

Algorithm:
  -Create a count variable
  -Find every possible substring
    -Return a substring array
  -Iterate over substring array
    -If current sub string is equal to the search text
      -Increment count by 1
  -Return count


=end


def solution(string, search_text)
  substrings = []

  (0..string.length - 1).each do |start_index|
    (start_index..string.length - 1).each do |end_index|
      substrings << string[start_index..end_index] if string[start_index..end_index] == search_text
    end
  end
  substrings
end


# full_text = "aa_bb_cc_dd_bb_e"
# search_text = "bb"

# p substring_count(full_text, search_text)

# full_text = "aaabbbcccc"
# search_text = "bbb"

# p substring_count(full_text, search_text)


 p solution('abcdeb','b')# 2);
#p solution('abcdeb', 'a')# 1);
# p solution('abbc', 'bb')# 1);
