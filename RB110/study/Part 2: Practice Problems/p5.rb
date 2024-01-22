=begin
# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

Input: 
  -A string

Output: 
  -A string with the character that occurs the least amount of times in the input string

Rules:
  -Explicit
    -If there are multiple characters with the same least amount of occuences oupt thew first in the string
    -Uppercase and Lowerer case characters should be concidered the same
  -Implicit
    -White spaces are Concidered a character in this case

questions?

# Examples:

p least_common_char("Hello World") #== "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'

# The tests above should print "true".

Data Structure:
  -Arrays
  -Strings
Assisting Structure:  
  -Hash

Algorithm:
  -Split input string into array
  -Down case all the characters in array
  -Iterate over array
    -Turn input array into a has where the key is the character and the value is the occurence
  -Iterate over hash and find the charter with the lowest value(s)
    -Trurn into array
  -Return first character in array
  

=end

def least_common_char(string)
  letter_array = string.chars.map {|letter| letter.downcase}
  letter_hash = {}
  letter_array.each do |letter|
    letter_hash[letter] = letter_array.count(letter)
  end
  letter_hash.select! do |key, value|
    value == letter_hash.values.min
  end
  letter_hash.first[0]
end



p least_common_char("Hello World") == "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'


