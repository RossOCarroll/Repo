=begin

# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

input:
  -A string

Output:
  -The caracter that occurs the least amount of times in that string

Rules:
  Explicit
    -Concider uppercase and lowercase to be the same
    -If there are two characters with the same amount of occuences return the first character
  Implicit
    -Whitespaces count as a character



# Examples:

p least_common_char("Hello World") #== "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'

# The tests above should print "true".

Data Structure:
  -String

Assisting Stucture:
  -Array
  -Hash

Algorithm:
  -Downcase the input string
  -Split the input string into an array
  -Create an empty hash
  -iterate over that array
    -for every character in the iteration
      -Append the character as the key of the hash
      -count the number of occuances and that will bne the value of the hash
  -Return the key that hash the minimum value

=end


def least_common_char(string)
  string.downcase!
  char_count = {}

  string.chars.each do |char|
    char_count[char] = string.count(char)
  end
  char_count.min_by {|char, count| count }.first
end


p least_common_char("Hello World") #== "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'