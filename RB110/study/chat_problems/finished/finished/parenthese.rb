=begin

Valid Parentheses: Write a Ruby method that takes a string containing just the characters 
'(', ')', '{', '}', '[', and ']', and returns true if the input string is valid, and false otherwise. 
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Algorithm:
  -Split the string into an array
  -if array is 1 or less characters long return false
  -If caracter at index 0 is equal to character at index -1 return true
    -else false


=end

def valid_parentheses?(str)
  array = str.split(//)
  stack = []

  array.each do |paren|
    case paren
    when '(', '{', '[' then stack.push(paren)
    when ')' then return false if stack.empty? || stack.pop != '('
    when '}' then return false if stack.empty? || stack.pop != '{'
    when ']' then return false if stack.empty? || stack.pop != '['
    end

  end

  stack.empty?
end


p valid_parentheses?("()") # Expected output: true
p valid_parentheses?("({})") # Expected output: true
p valid_parentheses?("([)]") # Expected output: false
p valid_parentheses?("]") # Expected output: false