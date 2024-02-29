=begin


The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a 
lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the 
length of the longest vowel substring. Vowels are any of aeiou.

Input:
  -A string that on;y contians letters

Output:
  -An integer representing the count of the longes substring

Rules:  
  EXplicit:
    -Strings will on;y contian alphabetic characters


Questions?:
  -Will an empty string be input?

Test Cases // Exsamples:

p solve("codewarriors")#,2)
p solve("suoidea")#,3)
p solve("iuuvgheaae")#,4)
p solve("ultrarevolutionariees")#,3)
p solve("strengthlessnesses")#,1)
p solve("cuboideonavicuare")#,2)
p solve("chrononhotonthuooaos")#,5)
p solve("iiihoovaeaaaoougjyaw")#,8)

Data Structure:
  -Strings

Assisting Structure:
  -Array

Algorithm:
  -Create every substring possible from the input string
    -Append to a substrings array
  -Iterate over the substrings array
    -Select the substrings that only contian vowels
  -Get acount of the substrings from the vowels array
  -Return the largest count

=end

VOWELS = %w(a e i o u)


# def solve(string)
#   substrings = []

#   (0..string.length - 1).each do |start_index|
#     (start_index..string.length - 1).each do |end_index|
#       substring = string[start_index..end_index]
#       substrings << substring.size if substring.chars.all? {|letter| VOWELS.include?(letter)}
#     end
#   end
#   substrings.max

# end


def solve(s)
  s.split(/[^aeiou]/)#.map{|x| x.size}.max
end


p solve("codewarriors")#,2)
# p solve("suoidea")#,3)
# p solve("iuuvgheaae")#,4)
# p solve("ultrarevolutionariees")#,3)
# p solve("strengthlessnesses")#,1)
# p solve("cuboideonavicuare")#,2)
# p solve("chrononhotonthuooaos")#,5)
# p solve("iiihoovaeaaaoougjyaw")#,8)