=begin

Problem: Longest Substring Without Repeating Characters
Write a method length_of_longest_substring that takes a string s as input and returns the length of the longest 
substring without repeating characters.

input:
  -String

Output:
  -An integer that represents the longest substring without repeating characters

Algorithm:
  -Break the input string into every possible substring intp an array
  -Iterate over every substring 
    -Select only substring that dont have duplicates
  -Count all remaing substring
    -return longest count

=end



def length_of_longest_substring(s)
  substrings = []

  (1..s.length - 1).each do |start_index|
    (start_index..s.length - 1).each do |end_index|
      substrings << s[start_index..end_index]
    end
  end

  substrings.map {|substring| substring.chars.uniq.join.size }.max
  
end

# Test cases
p length_of_longest_substring("abcabcbb") # Output should be 3
puts length_of_longest_substring("bbbbb") # Output should be 1
puts length_of_longest_substring("pwwkew") # Output should be 3