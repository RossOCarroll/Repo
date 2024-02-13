=begin

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged
 to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples

Input:
  -two strings of letters

Ouput:
  -True of False depending on if string 1 can be rearranged to match string 2

Explicit:
  -Only lower case letters will be used
  -No punctuation will be used

Test Cases:

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

Data Structure:
  -Strings
  -Booleans
Assisting:
  -Arrays

Algorithm:
    -Set a substrings array to an empty array
    -Set a result variable to false
    -Find all substrings in string 1
      -From index 0 to length of string 1 - 1
        -from start index to length of string -1
          -Slice from start index to end index
            -append to substrings array
    -iterate over substrings array
      -Find all permutations if the substrings array at the size of string 2
        -if sub string equals string 2
          -Reassign result to True
    -Return result

=end

def find_substrings(string)
  substrings = []

  (0..string.length - 1).each do |start_index|
    (start_index..string.length - 1).each do |end_index|
      substrings << string[start_index..end_index]
    end
  end
  substrings
end


def scramble(str1, str2)
  char_count = Hash.new(0)

  str1.each_char { |char| char_count[char] += 1 }
  str2.each_char { |char| return false if (char_count[char] -= 1).negative? }

  true
end


p scramble('rkqodlw', 'world') #==> True
p scramble('cedewaraaossoqqyt', 'codewars') #==> True
p scramble('katas', 'steak') #==> False