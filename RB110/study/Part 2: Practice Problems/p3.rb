=begin

# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.

Input:  
  -String
Ouput
  -Same sequence of string words with every 3rd word has every second character coverted to uppercase

Rules:
  Explicit: 

  Questions?
    -Are we returning the same string?
    -Will their be an empty input?

# Examples:

p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
  'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
  'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# The tests above should print "true".

Data Structure:
  -Strings
  Assisting 
    -Array

Algorithm:
  -Create a helper method that upper cases every other letter in a word
    -Split word into an array 
    -iterate through array
      -at index plus 1 upcase letter
  -Set a result to empty array
  -Set index to 2
  -Split input array
  -Iterate over array
    -If word is equal to word at index
      -pass word to the helper method and append to result
    -else
      -append to result
  -Join result and return


=end


def upcase_every_other(word)
  result = ''
  every_other = 1
  word.chars.each_with_index do |letter, index|
    if index == every_other 
      result += letter.upcase
      every_other += 2
    else  
      result += letter
    end

  end
  result
end

def to_weird_case(sentence)
  result = []
  every_third = 2
  sentence_array = sentence.split
  sentence_array.each_with_index do |word, index|
    if index == every_third
      result << upcase_every_other(word)
      every_third += 3
    else  
      result << word
    end
  end
  result.join(' ')
end


p to_weird_case('Lorem Ipsum is simply dummy text of the printing') == 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case('It is a long established fact that a reader will be distracted') == 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case('Miss Mary Poppins word is supercalifragilisticexpialidocious') == 'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

