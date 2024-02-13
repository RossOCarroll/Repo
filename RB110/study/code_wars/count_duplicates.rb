=begin

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
that occur more than once in the input string. The input string can be assumed to contain only alphabets 
(both uppercase and lowercase) and numeric digits.

Input:
  -String of alphanumeric and numeric digits

Ouput:
  -An integer representing the count of distinct digits that occur more then once

Explicit:
  -Inout string will only contian alphanumeric and characters
  -Make the method case insesitive



Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice

Test cases:
p duplicate_count("")#, 0)
p duplicate_count("abcde")#, 0)
p duplicate_count("abcdeaa")#, 1)
p duplicate_count("abcdeaB")#, 2)
p duplicate_count("Indivisibilities")#, 2)


Data Structure:
  -String
  -Integers

Assiging
  -Array

Algorithm:
    -Set a num of multiple occurances variable to 0
    -Split the input string into an array
    -Iterate over that array
      -For each character in iteration 
      -Count how often element occurs in string
        -If charater count is greater 2 
          -increment multiple occurences variable
    -Return Multiple occuranes

=end

def duplicate_count(string)
  multiple_occurances = 0
  string_array = string.chars.map {|char| char.downcase}
  char_count = {}

  string_array.each do |char|
    char_count[char] = string_array.count(char)
  end
  char_count.each do |char, count|
    multiple_occurances += 1 if count > 1
  end
  multiple_occurances
end


p duplicate_count("")#, 0)
p duplicate_count("abcde")#, 0)
p duplicate_count("abcdeaa")#, 1)
p duplicate_count("abcdeaB")#, 2)
p duplicate_count("Indivisibilities")#, 2)