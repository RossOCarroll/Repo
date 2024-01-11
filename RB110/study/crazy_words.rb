=begin
  -string
  output:
    -Array with special character removed and every other letter capitalized
  
  Algorithim:
    -Set a return Array to an empty Array
    -Seperate the characters in the input String
    -Remove special characters
      - array of characters, some alphabetic, some not
        -> array of just the alphabetic characters
  
    -Iterate through Array 
      -Capitalize ever other letter
    
  
=end

word = 'what-a-b.e.a.utiful day!'
AlPHABET = ('a'..'z').to_a + ('A'..'Z').to_a


return_array = []

word.chars.each do |element|
  return_array << element if AlPHABET.include?(element)
end

p return_array.join