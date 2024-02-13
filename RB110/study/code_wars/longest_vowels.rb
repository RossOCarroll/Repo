=begin
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!


Input:  
  -A lowercase string 

Ouput:
  -An integer the length of the longest vowel substring

Explicit:
  -Input string will be lower case and only contian vowels and consonants

Questions:
  -Will there be an empty string?

Test Cases:
    p solve("codewarriors") #,2)
    p solve("suoidea") #,3)
    p solve("iuuvgheaae") #,4)
    p solve("ultrarevolutionariees") #,3)
    p solve("strengthlessnesses")##,1)
    p solve("cuboideonavicuare")#,2)
    p solve("chrononhotonthuooaos")#,5)
    p solve("iiihoovaeaaaoougjyaw")#,8)


Data structure:
    -Strings
    -Integers
Assigning structure:
    -Arrays

Algorithm:
  -Set a contrant variable with vowels only
  -Set a substring array to an empty array
  -Split the input string into an array
  -Iterate over input array to gather all substrings
    -set an index variable to 1
    -Starting from the curren element
      -loop while index is less than the size of input array
      -append to the substring from current element to index if current substring includes vowels
  -Iterate through substring array
    -find the largest substring
  -Return the size of largest substring
    

=end

VOWELS = 'aeiou'

def find_substrings(string)
  substrings = []

  (0..string.length - 1).each do |start_index|
    (start_index..string.length - 1).each do |end_index|
      substrings << string[start_index..end_index]
    end
  end
  substrings
end



def solve(string)
  substrings = find_substrings(string)

  substrings.select! { |substring| substring.match?(/\A[aeiou]+\z/) }


  substrings.max_by {|substring| substring.size}.size

end

p solve("codewarriors") #,2)
 p solve("suoidea") #,3)
p solve("iuuvgheaae") #,4)
p solve("ultrarevolutionariees") #,3)
p solve("strengthlessnesses")##,1)
p solve("cuboideonavicuare")#,2)
p solve("chrononhotonthuooaos")#,5)
p solve("iiihoovaeaaaoougjyaw")#,8)