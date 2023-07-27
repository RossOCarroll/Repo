# input : an array of lower case strings
# return : an array of every character that appears in all of the strings
  # if a charater appears twice in leach string, the return array should contain two elements 
  # of thAt character

# set chars equal to the characters of the first element (remove fits element from array)
# iterate through the character (with select method)
  # iterate through the words in the array 
  # check if all the words contian the character 
    # block should return true
    # remove on of thast character from the string

def common_chars(array)
  chars = array.shift.chars
  
  chars.select do |char|
    array.all? {|word| word.sub!("#{char}", "")}
  end
end



p common_chars(["bella", "label", "roller"]) == ["e", "l", "l"]
