# # Write a method that takes a single String argument and returns a new string that 
# # contains the original value of the argument with the first character of every word 
# # capitalized and all other letters lowercase.

# # You may assume that words are any sequence of non-blank characters.

# Input:
#   -String

# Output:
#   -A new string with the all the words capitalized

# Rules:
#   Explicit requirments:
#     -Assume that wordss are any sequence of non-black spaces characters

#   Implicit requirments:
#     -Strings that contian quotes should remain lower case

# Questions:


# Test cases / exsamples:

# word_cap('four score and seven') == 'Four Score And Seven'
# word_cap('the javaScript language') == 'The Javascript Language'
# word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# Data Structure:
#   -String
#   Assisting Structure
#   -Array

# Algorithm:
#   -Split input string Set a capitalized array
#   - Set counter to 0
#   -Loop through cappitalized array
#     -Check if element begins with ""
#       -If so next
#     -Calipicalize Element
#     -Incement counter
#     -Break if counter is equal to capitalized array size
#   -Join capitalized array
#   -return

# def word_cap(string)
#   capitalized = string.split 
#   counter = 0

#   loop do
#     # next if capitalized[counter].start_with?('"')
#     capitalized[counter].capitalize!

#     counter += 1
#     break if counter == capitalized.size
#   end
#   capitalized.join(' ')

# end

# p word_cap('four score and seven') == 'Four Score And Seven'
# p word_cap('the javaScript language') #== 'The Javascript Language'
# p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

#Further Exploration

def word_cap2(string)
  capitalized = string.split 

  capitalized.map do |word|
    word[0] = word[0].upcase!
  end

end

p word_cap2('four score and seven') #== 'Four Score And Seven'
p word_cap2('the javaScript language') == 'The Javascript Language'
p word_cap2('this is a "quoted" word') == 'This Is A "quoted" Word'