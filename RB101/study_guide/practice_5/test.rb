

# argument - string
# return true or false
  # rules - the entire string is a repeating substring

#option 1
  #create an array of substrings thast are in length the factors of the string (uo to half the length
# of the string)
  # for each substring multiply it by the lenght of the string divided by the length
 # of the substring
 # check if that substring multiplication is equal to the string

def repeated_substring_pattern(string)
  substrings = []
  1.upto(string.size / 2) do |num|
    if (string.size % num == 0)
      substrings << string[0, num]
    end
  end

  substrings.each do |substring|
    multiplier = string.size / substring.size
    return true if substring * multiplier == string
  end

  false
  
end



p repeated_substring_pattern('abab') == true
p repeated_substring_pattern('aba') == false