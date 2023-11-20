# Given a string that consists of some words (all lowercased) and an assortment of 
# non-alphabetic characters, write a method that returns that string with all of the 
# non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, 
# you should only have one space in the result (the result should never have consecutive spaces).

# input :
#   - String

# ouput:
#   - String

# Implicit requirments:
#   -If one or more non-numerical characters occure in a row you should have only one space in the result

# Exsamples / Test Cases

#   - cleanup("---what's my +*& line?") == ' what s my line '

# Data Structure
#   -String
#   -Array

# Algorithim:
#   1.Create a new_string and assign to empty String
#   2.Split string into array and assign to split string
#   3.iterate over empty string
#     1. if element has more than one non-numeric character 
#       - replace with one space
#     2. Sub out non- numberical character with space
#   4. return 

def cleanup(string)
  string.gsub(/[^0-9a-z]/i, ' ').squeeze(' ')

end

puts cleanup("---what's my +*& line?") == ' what s my line '

ALPHABET = ('a'..'z').to_a

def cleanup(text)
  clean_chars = []

  text.chars.each do |char|
    if ALPHABET.include?(char)
      clean_chars << char
    else
      clean_chars << ' ' unless clean_chars.last == ' '
    end
  end

  clean_chars.join
end