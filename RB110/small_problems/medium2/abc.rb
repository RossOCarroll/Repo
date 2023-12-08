=begin

A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to just those words that do not use both
letters from any given block. Each letter in each block can only be used once.

Write a method that returns true if the word passed in as an argument can be spelled 
from this set of blocks, false otherwise.

Input:
  -String 'Word"

Output
  -Boolean if the argument can be spelled with the spelling blocks provided

Rules:
  -Each spelling block can opnly be used once


Test cases exsamples:
  
block_word?('BATCH') == true
block_word?('BUTCH') == false
block_word?('jest') == true

Data structure:
  -String
  -Boolean

Assiting structure:
  -Array

Algorithm
  -Create a list of spelling block pairs
  -Creat a used block array
  -Split the input sting into array
  -Iterate over input word array
    -if element in array matches element in spelling block remove pair
    -if element is does not match return a nil to the used block
  -Return false if used block contians a nil
=end



def block_word?(word)
  block_pairs = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], 
                 ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                 ['V', 'I'], ['L', 'Y'], ['Z', 'M']
                ]

  used_block = []
  word_array = word.chars

  block_pairs.each do |pair|
    word_array.each do |letter| 
      letter.upcase!
      if pair[0] == letter || pair[1] == letter 
        used_block << pair
        break  # Break the loop once a letter is found in the current pair
      end
    end
  end

  used_block.uniq.size == word_array.size
end

# Test cases
puts block_word?('BATCH') # true
puts block_word?('BUTCH') # false
puts block_word?('jest')