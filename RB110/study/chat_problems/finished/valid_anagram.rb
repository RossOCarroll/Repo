=begin

Valid Anagram: Write a Ruby method that takes two strings s and t and returns true if t is an anagram of s, 
and false otherwise.



input:
  -two strings

Output:
  -true or false depending on if the two strings are anagrams of each other

Algorithm:
  -Set a result variable to false
  -Split the s string into an array 
  -Iterate over array
    -if current element is not included in string t 
      -reassign result to false
  -return result


=end



def is_anagram(s, t)
  result = true

  s.chars.each do |letter|
    result = false if !t.include?(letter)
  end
  result
end

# Test cases
p is_anagram("anagram", "nagaram") # Expected output: true
p is_anagram("rat", "car") # Expected output: false