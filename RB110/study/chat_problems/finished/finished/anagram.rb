=begin

Anagram Detection: Write a Ruby method that takes two strings and returns true if they are anagrams of each other, 
false otherwise. Anagrams are strings that contain the same characters in a different order.
ruby

input:
  -Two strings

Output:
  -True or false depending on if the two string are anagrams of each other (they contian the same charaters in a different order)

Questions?
  -


Data structure
  -Strings
Assisting:
  -Array

Algorithm:
  -Set a result variable to true
  -Split string 2 and iterate over each character
    -if the current character is included in the first string 
      -do nothing
    -if the current character is not included in the first string
      -Reassign result to false
  -Return result


=end








def anagram?(str1, str2)
  result = true

  str2.chars.each do |char|
    result = false if !str1.chars.include?(char)
  end
  result
end

# Test cases
p anagram?("listen", "silent") # true
p anagram?("hello", "world")   # false