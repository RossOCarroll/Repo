=begin

# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.


input:
  -A string sentence

Output:
  -the same sequence of character but ever 3rd word has every second character uppercase

Rules

Questions:
  -will there be a input string that is less then 3 words long ot an empty string?



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
  -string

Assisting Structure
  -Array

Algorithm
  -Create a ever other method takes a string word
    -splits the word and capitalizes every other letter... odd index
  -Split the string up into a words array
  -Creat an index variable and assign to 2
  -Iterate over that array
    -if word is at index
        -Capitalize every other letter or send to every other method
        -increment the index by 3

=end

def every_other_cap(word)
  weird_word = []
  word.chars.each_with_index do |char, idx|
    if idx.odd?
      weird_word << char.upcase 
    else    
      weird_word << char
    end
  end
  weird_word.join
end


def to_weird_case(string_sentence)
  index = 2
  weird_sentence = []
  string_sentence.split(' ').each_with_index do |word, idx|
    if index == idx
      weird_sentence << every_other_cap(word)
      index += 3
    else  
      weird_sentence << word
    end
  end
  weird_sentence.join(' ')
end



p to_weird_case('Lorem Ipsum is simply dummy text of the printing') == 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case('It is a long established fact that a reader will be distracted') == 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case('Miss Mary Poppins word is supercalifragilisticexpialidocious') == 'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'