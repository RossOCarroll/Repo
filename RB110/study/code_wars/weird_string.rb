=begin

Write a function that accepts a string, and returns the same string with all even indexed characters in each 
word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero 
based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over 
for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present 
if there are multiple words. Words will be separated by a single space(' ').


input:
  -A string with one or more words

Ouput:
  -A string with even indices of the string capitaized and odd indicies down cased

Questions:
  -Will there be an empty string?

Tes cases:
p weirdcase('This')#, 'ThIs');
p weirdcase('is')#, 'Is');


Data Structure:
  -String

Assisting structure
  -Array

Algorithm:
  -Set a result array
  -Spliting the string into words seperated by ' '
  -Iterate over each word
    -set a weird word variable to an empty string
    -Iterate over each letter in the word by index
      -If index is even?
        -upcase letter and add to weird word
      -Else if letter is odd
        -downcase and add to word
    -Append weird word to result array
  -Join weird word with ' '  and return result

=end



def weirdcase(string)
  result_array = []

  split_string = string.split(' ')

  split_string.each do |word|
    weird_word = ''
    word.chars.each_with_index do |letter, index|
      if index.even?
        weird_word += letter.upcase
      else
        weird_word += letter.downcase
      end
    end
    result_array << weird_word
  end
  result_array.join(' ')
end


p weirdcase('This')#, 'ThIs');
p weirdcase('is')#, 'Is');
p weirdcase('This is a test'), 'ThIs Is A TeSt'