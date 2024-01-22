=begin
  
input:
  -String
Ouput:
  - True or false depening on if there is a repeating sub string.


option 1
  -Create an array of substrings
  -Multiply starting with two and breaking when the multiplied sub string is larger then the input 

option 2
  -Create an array of substrings the length that are the length of the factors of the string only up to half
  -For each of thos substrings multiple it by the length of the string divided by the length of the sub string
  -Check if that substring multiplication is equal to the string


=end

def repeating_sub(string)
  substrings = []
  1.upto(string.size / 2) do |num|
    if string.size % num == 0
      substrings << string[0, num]
    end
  end

  substrings.each do |substring|
    multiplier = string.size / substring.size
    return true if substring * multiplier == string
  end
  false
end

p repeating_sub('abab') #true
p repeating_sub('aba') #false
p repeating_sub('aabaaba') #false
p repeating_sub('abaababaab') #true
p repeating_sub('abcabcabcabc') #true

