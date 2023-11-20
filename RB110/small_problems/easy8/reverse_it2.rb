# Write a method that takes one argument, a string containing one or more words, and returns 
# the given string with words that contain five or more characters reversed. Each string will 
# consist of only letters and spaces. Spaces should be included only when more than one word 
# is present.

# Input:
#   -String of letters

# Output
#   -String with the word reversed

# Rules:
#   Explicit:
#     -Strings will contian 1 or more words
#     -Words that contian 5 or more charaters should be reversed
#     -Each string will contian one or more words
#     -Spaces shall be included

#   Implicit:
#     -Return a string

#   Ouestions:
#     -Will there be empty strings?

# Test cases / Exsamples:

# puts reverse_words('Professional')          # => lanoisseforP
# puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
# puts reverse_words('Launch School')         # => hcnuaL loohcS

# Data structure:
#   -Strings
#   Assisting structure:
#     -Array

# Algorithm:
#   -Set a reverse_words variable to the assing to the input string split into an Array
#   -Iterate over reverse_words array
#     -If element is five characters or larger than reverse word
#   -Join reverse_words array with ' ' and return

def reverse_words(string)
  revered_words = []

  string.split.each do |word|
    word.reverse! if word.length >= 5
    revered_words << word
    

  end
  revered_words.join( ' ')



end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS