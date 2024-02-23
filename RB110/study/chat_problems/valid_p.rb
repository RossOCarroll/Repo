

=begin


Algorithm
  -Set a variable stack trace
  -Split the string into an array
  -Iterate over array
    -if current element is any open parenteses 
      -push current element
    -when current element is a closed parenthese 
      -return false is stack empty or or remove the closed parenthese from stack

=end


def valid_parentheses?(s)
  stack = []

  s.split(//).each do |paren|
    case paren
    when '(', '[', '{' then stack.push(paren)
    when ')' then return false if stack.empty? || stack.pop != '('
    when ']' then return false if stack.empty? || stack.pop != '['
    when '}' then return false if stack.empty? || stack.pop != '{'

    end
  end
  stack.empty?
end

# Test cases
puts valid_parentheses?("()") # Output should be true
puts valid_parentheses?("()[]{}") # Output should be true
puts valid_parentheses?("(]") # Output should be false