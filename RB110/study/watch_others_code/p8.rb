=begin


Rules:
  -If string is empty return 0 or if no palindromes

Algorithm:
  -Find all sub strings
    -Break string into an array
    -iterate over this array
  -pass substrings to palindromes method
    - Return substrings that are the same forwards as reversed
  -Iterate over substrings
    -Find largest palindrome
  -Return size of palindrome




=end

def find_substrings(string)
  result = []
  starting_point = 0
  while starting_point <= string.size
    starting_point.upto(string.length - 1) do |num|
      result << string[starting_point..num]
    end
    starting_point += 1
  end
  result
end

def is_palindrome?(string)
  string == string.reverse
end


def longest_palindrome(string)
  substrings = find_substrings(string)
  palindromes_count = []

  substrings.each do |string| 
    palindromes_count << string.size if is_palindrome?(string)
  end

  palindromes_count.max
end

p longest_palindrome('a')
p longest_palindrome('aa')
p longest_palindrome('aab')
p longest_palindrome('baa')
p longest_palindrome('baabcd')
 p longest_palindrome('baablkj12345432133d')