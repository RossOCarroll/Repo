[1, 2, 3].select do |num|
  num > 5
  'hi'
end

# The return value of this select method should be 1, 2, 3 as the its evaluating the last
# expression of the block which is the string 'hi'. Since the select method only cares about
# the truthiness of the block which is the 'string' 'hi' is truthy it will return the array
# [1, 2, 3].