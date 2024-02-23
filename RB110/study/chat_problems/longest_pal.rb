=begin

Problem: Longest Palindromic Substring
Write a method longest_palindrome that takes a string s as input and returns the longest palindromic substring 
contained in s.

A palindrome is a string that reads the same backward as forward. For example, "level" and "racecar" are 
palindromes.

Input:
  -A string

Output:
  -The longest palendrome from the input string

Questions:
  -Will there be an empty string input?


Algorithm:
  -Get all sub strings from the input string 
    -Iterate over the string
      -Splice from current element to end index 
        -Increment ending index
  -Select substrings that are the same fowards as they are reversed
  -Return the longest from that array of substrings

=end





def longest_palindrome(s)
  substrings = []

  (1..s.length - 1).each do |start_index|
    (start_index..s.length - 1).each do |end_index|
      substrings << s[start_index..end_index]
    end
  end
  palindromes = substrings.select {|substring| substring == substring.reverse }
  palindromes.max_by {|substring| substring.size }
end

# Test cases
p longest_palindrome("babad") # Output should be "bab" or "aba"
puts longest_palindrome("cbbd") # Output should be "bb"