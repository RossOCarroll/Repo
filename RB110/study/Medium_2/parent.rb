=begin


Write a method that takes a string as an argument, and returns true if all parentheses in 
the string are properly balanced, false otherwise. To be properly balanced, parentheses must
occur in matching '(' and ')' pairs.

Examples:

Copy Code
balanced?('What (is) this?') == true
balanced?('What is) this?') == false
balanced?('What (is this?') == false
balanced?('((What) (is this))?') == true
balanced?('((What)) (is this))?') == false
balanced?('Hey!') == true
balanced?(')Hey!(') == false
balanced?('What ((is))) up(') == false
balanced?('What ())(is() up') == false

Input:
  -String

Ouput:
  -True or false if the string is balenced with parenthese

Questions:  


Data Structure
  -String
  -Boolean

Assiting: 
  -Array

Algorithm
  -set a parenthese variable to an empty string
  -Split the string into an array
  -Iterate over the array
    -If the character is ( or )
      -append to parenteses variable
  -If the the paraentese varible starts with '(' 
    -return false
  -If the parenses variable size is even? return true
    -else false

=end


def balanced?(string)
  paren = 0
  string.chars.each do |char|
    if char == '(' 
      paren += 1
    elsif char == ')'
      paren -= 1
    end
    break if paren < 0
  end

  paren.zero?

end


p balanced?('What (is) this?') #== true
p balanced?('What is) this?') #== false
p balanced?('What (is this?')## == false
p balanced?('((What) (is this))?') #== true
p balanced?('((What)) (is this))?') #== false
p balanced?('Hey!') #== true
p balanced?(')Hey!(') #== false
p balanced?('What ((is))) up(') #== false
 p balanced?('What ())(is() up') #== false