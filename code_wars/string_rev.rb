=begin

Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (Just like the name of this Kata).
 Strings passed in will consist of only letters and spaces. Spaces will be included only 
when more than one word is present.

Input:
  -String sentence
Ouput:
  -the same string with thew ords that are 5 characters or longer reversed

Explicit Requirments:
  -Return the same string
  -Spaces will be included when more than 1 word is input
Implicit Requirments:
  -

Test Cases exsamples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

Data structure:
  -Strings
Assisting Structure:
  -Array

Algorithm:
  -Turn input string into an array
  -If array has only 1 elements and is less then 5 characters
    -return string
  -Else if the array has only one charater and greater then or equal to 5
    -Reverse string and return
  -Iterate through array
    -Check to see if the element is greater then or equal to 5 chars
      -If true reverse element
  -Join result into a string and return

=end

def spin_words(string)
  result = string.split.map do |word| 
    if word.size >= 5
      word.reverse 
    else  
      word
    end
  end
  result.join(' ')
end

p spin_words("Worriors")
p spin_words("Hey fellow warriors")  #--> "Hey wollef sroirraw" 
p spin_words("This is a test")     # --> "This is a test" 
p spin_words("This is another test") #--> "This is rehtona test"