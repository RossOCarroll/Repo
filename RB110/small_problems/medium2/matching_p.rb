=begin

Write a method that takes a string as an argument, and returns true if all parentheses 
in the string are properly balanced, false otherwise. To be properly balanced, parentheses 
must occur in matching '(' and ')' pairs.

input:
  -String

output:
  -Boolean: True if the string has mataching parentheses false otherwise

Rules:
  Explicit:
    -To be balenced parentheses must have matching pairs
  Implicit:
    -Strings with no parentheses are conidered matching

Test cases / Exsamples:

balanced?('What (is) this?') == true
balanced?('What is) this?') == false
balanced?('What (is this?') == false
balanced?('((What) (is this))?') == true
balanced?('((What)) (is this))?') == false
balanced?('Hey!') == true
balanced?(')Hey!(') == false
balanced?('What ((is))) up(') == false
balanced?('What ())(is() up') == false

Data Structure:
  -Strings
  -Booleans

Algorithm:
  -Remove all characters in the input string besides '(' and ')'
  -If there are no parentheses return true
  -Split string into array
    -keep only unique characters
  -Join back into a string
  -If string is equal to '()'

=end

def balanced?(string)
  parentheses = string.tr('^()', '')
  stack = []

  parentheses.each_char do |char|
    if char == '('
      stack << '('
    elsif char == ')'
      return false if stack.empty? || stack.pop != '('
    end
  end
  stack.empty?
end

p balanced?('What (is) this?') #== true
p balanced?('What is) this?') #== false
p balanced?('What (is this?') #== false
p balanced?('((What) (is this))?') #== true
p balanced?('((What)) (is this))?') #== false
p balanced?('Hey!') #== true
p balanced?(')Hey!(') #== false
p balanced?('What ((is))) up(') #== false
p balanced?('What ())(is() up') #== false




