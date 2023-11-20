# Create a method that takes 2 arguments, an array and a hash. The array will contain 
# 2 or more elements that, when combined with adjoining spaces, will produce a person's name. 
# The hash will contain two keys, :title and :occupation, and the appropriate values. 
# Your method should return a greeting that uses the person's full name, and mentions 
# the person's title and occupation.

# Input:
#   - Array of two or more elements
#   - Hash 2 keys which values are the title and occupation

# Output 
#   - Return a string with a greeting with the name

# Rules:
#   -Implicit:  
#     -Return should be a string
  
# Test cases / Exsanmples:

# greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
# => "Hello, John Q Doe! Nice to have a Master Plumber around."

# Data structure:
#   -Array 
#   -Hash
#   -String

# Algorithm:
#   -Save the input array to name with the array joined with ' '
#   -Concat with string interpolation using the name , title and occupation

def greetings(array, hash)
  name = array.join(' ')

  puts "Hello, #{name}! Nice to have a #{hash[:title]} #{hash[:occupation]} around."

end

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
#=> "Hello, John Q Doe! Nice to have a Master Plumber around."