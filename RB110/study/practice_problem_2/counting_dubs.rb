=begin

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
 digits that occur more than once in the input string. The input string can be assumed to contain only alphabets 
 (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice

input:
  -A string with characters that are alphanumeric

Output:
  -An integer representing the amount of charaters that apear more then once

Rules:
  Explicit:
    -Should be case insensitive

Test cases // exsamples:

p duplicate_count("")#, 0)
p duplicate_count("abcde")#, 0)
p duplicate_count("abcdeaa")#, 1)
p duplicate_count("abcdeaB")#, 2)
p duplicate_count("Indivisibilities")#, 2)


Data Structure:
  -String
  -Integer

Assisting:
  -Array

Algorithm:
    -Set a dublicAtes variable to 0
    -Split the string into an array
      -downcase the current character
      -Count how many time the character occures in the input string
        -If count is greater the 1
          -increment duplicates 1
    -Return dublicates variable

=end


def duplicate_count(string)
  hash_dup = {}
  
  string.downcase!.each_char do |char|
    hash_dup[char] = string.count(char) if string.count(char) > 1
  end
  hash_dup.size
end

# p duplicate_count("")#, 0)
# p duplicate_count("abcde")#, 0)
# p duplicate_count("abcdeaa")#, 1)
p duplicate_count("abcdeaB")#, 2)
# p duplicate_count("Indivisibilities")#, 2)
