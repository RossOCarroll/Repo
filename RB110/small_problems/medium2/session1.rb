=begin
# Find the missing letter
# Write a method that takes an array of consecutive (increasing) letters as input and that 

returns the missing letter in the array.
#
# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
#
# The array will always contain letters in only one case.

# Example:
#
# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'

# Use the English alphabet with 26 letters.

input:
  -array of consecutive letters in the alphabet with one letter missing

output:
  -string element of the missing letter

rulesL
  Explicit:
    -input will always be a valid array
    -there will always be one missing letter
    -the array will contain letters in one case
  Implicit:
      -returning a string element not an array

Data structure:
  -arrays
  -strings

Algorithm:
  -Create an array with the whole alphabet in doewn case
  -down case the input array
  -at index 0 of input array compare with alphabet array
    -find the comparison element at index
  -grab the comparesion array 
  -compare the input array with the comparasion array + 1
  -if input array is upper case return uppercase otherwise downcase


=end

ALPHABET = ('a'..'z').to_a + ('A'..'Z').to_a

def find_missing_letter(array)
  start = ALPHABET.index(array[0])

  comparasion_array = ALPHABET[start, array.size + 1]

  missing_letter = (comparasion_array - array).first

end



p find_missing_letter(["a","b","c","d","f"]) == "e"
p find_missing_letter(["O","Q","R","S"]) == "P"
p find_missing_letter(["b","d"]) == "c"
p find_missing_letter(["a","b","d"]) == "c"
p find_missing_letter(["b","d","e"]) == "c"