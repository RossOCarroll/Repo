=begin

A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to just those words that do not use both 
letters from any given block. Each letter in each block can only be used once.

Write a method that returns true if the word passed in as an argument can be spelled from 
this set of blocks, false otherwise.

Examples:

Copy Code
block_word?('BATCH') == true
block_word?('BUTCH') == false
block_word?('jest') == true



Input:
  -A single word string

Output
  -True or false depending on if the word can be spelled withe only using one letter from each leter 
  block

Implict
  -Case doesnt matter 

Data structure
  -String

Assiting structure:
  -Nested arrays

Algorithm:
  -Creat a nested array of word blocks
  -Iterate over the nested word blocks
    -Iterate over input string
      -If letter is included in word block
        -Delete word pair
      -If letter is not included in word block
        -return false

=end


def block_word?(word)
  block = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], 
           ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], 
           ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

  word.upcase.chars.each do |letter|
    pair_found = false

    block.each do |pair|
      if pair.include?(letter)
        pair_found = true
        block.delete(pair)
        break
      end
    end

    return false unless pair_found
  end

  true
end

p block_word?('BATCH') #== true
p block_word?('BUTCH') #== false
p block_word?('jest') #== true
