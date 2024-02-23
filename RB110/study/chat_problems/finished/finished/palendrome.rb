=begin

Palindrome Detection: Write a Ruby method that takes a string and returns true if it is a palindrome, false 
otherwise. A palindrome is a word or phrase that reads the same backward as forward.





=end


def palindrome?(str)
  str == str.reverse
end

# Test cases
p palindrome?("racecar")   # true
p palindrome?("hello")