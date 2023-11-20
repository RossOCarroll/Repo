# Write a method that takes a string with one or more space separated words and 
# returns a hash that shows the number of words of different sizes.

# Words consist of any string of characters that do not include a space.

# Input:
#   - string

# Output:
#   - Hash 

# Explicit Requirements:
#   -Words consist of any string of charaters that do not include spaces

# Implicit Requirements:
#   -empty string will return an empty hash

# Examples / Test cases

# word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# word_sizes('') == {}

# Data Structure:
#   - string
#   - Hash
#   - Array

# Algorithim
#   1. Set word_count to empty hash
#   2. Set word_array to the return of split on input
#   3. set counter
#   4. Iterate through word_array
#     1. Grab the lenth of ewach word 
#     2. append length to ward count with the number of coresponding words
#   5. Ouput hash


def word_sizes(string)
  hash = Hash.new(0)
  word_array = string.split

  word_array.each do |word|
    word.gsub!(/[^0-9a-z]/i, '')
    hash[word.size] += 1
  end

  hash

end



#puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
#puts  word_sizes('Hey diddle diddle, the cat and the fiddle!') #== { 3 => 5, 6 => 1, 7 => 2 }
#puts  word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
#puts  word_sizes('') == {}

puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
puts word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
puts word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
puts word_sizes('') == {}