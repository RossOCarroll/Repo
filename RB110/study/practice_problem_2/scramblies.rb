=begin


Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged 
to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

input:  
  -Two strings

Output:
  -True or False depending on weather a portion of rearranging string 1 will equalstring 2


Rules:
  Explicit:
    -Only lowercase alphabet letters will be used, no puncuation or digits

test cases exsamples:

p scramble('rkqodlw',           'world'     )#).to eq( true)
p scramble('cedewaraaossoqqyt', 'codewars'  )#).to eq( true)
p scramble('katas',             'steak'     )#).to eq(false)
p scramble('scriptjava',        'javascript')#).to eq( true)
p scramble('scriptingjava',     'javascript')#).to eq( true)

Data Structure:
  -strings
  -booleans

Asssiting structure:
  -Array

Algorithm:
  -Split str 2 into an array
  -iterate over that array
    -Check to see if each letter in array is included in string 1
      -Return false if not
  -Otherwise return true



=end


def scramble(str1, str2)
  str2.chars.each do |letter|
    return false if !str1.include?(letter)
  end
  true
end


p scramble('rkqodlw',           'world'     )#).to eq( true)
p scramble('cedewaraaossoqqyt', 'codewars'  )#).to eq( true)
p scramble('katas',             'steak'     )#).to eq(false)
p scramble('scriptjava',        'javascript')#).to eq( true)
p scramble('scriptingjava',     'javascript')#).to eq( true)