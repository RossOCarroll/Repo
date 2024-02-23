=begin

Valid Palindrome II: Write a Ruby method that takes a string and returns true if it is possible to remove at most
 one character from the string to make it a valid palindrome, false otherwise


input:
  -String

Output:
  -True or false depending on if at mos one character is removed the string would becom a valid palendrome(spellled the same reversed)

Rules:

Data structure:
  -Strings

Asssiting structure:
  -Array

Algorithm:
  -seperate the string into an array
  -Iterate over the array
    -Remove the current character
      -Check if the string reversed is equal to the array joined back to a string
        -Return true 

  -Otherwise return false

=end





def valid_palindrome_ii(s)
  return true if s == s.reverse

  left = 0
  right = s.length - 1 

  while  left < right
    if s[left] != s[right]
      return is_palindrome?(s, left + 1, right) || is_palindrome?(s, left, right - 1)
    end
    left += 1
    right -= 1
  end
end


def is_palindrome?(s, left, right)
  while left < right
    return false if s[left] != s[right]

    left += 1
    right -= 1
  end

  true
end

# Test cases
p valid_palindrome_ii("aba") # Expected output: true
p valid_palindrome_ii("abca") # Expected output: true
p valid_palindrome_ii("abc") # Expected output: false