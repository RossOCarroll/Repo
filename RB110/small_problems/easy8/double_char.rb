# Write a method that takes a string, and returns a new string in which every character 
# is doubled

# Input:
#   -String

# Output:
#   -String with each character doubled

# Rules:
#   Explicit:
#     -return a new string
#   Implicit:
#     -An empty input string should return a empty string

# Test cases / exsamples:

# repeater('Hello') == "HHeelllloo"
# repeater("Good job!") == "GGoooodd  jjoobb!!"
# repeater('') == ''

# Data Structure:
#   -String

# Algorithm:
#   -Set a double_string and assign to empty string
#   -Iterate through input string
#     - for each iteration 2 times append character to double_string
#   -Return double string

def repeater(string)
  double_string = ''

  string.each_char do |character|
     2.times {|_| double_string << character}
  end

  double_string
end

# p repeater('Hello') == "HHeelllloo"
# p repeater("Good job!") == "GGoooodd  jjoobb!!"
# p repeater('') == ''

CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

def double_consonants(string)
  double_consonants = ''

  string.each_char do |char|
      if CONSONANTS.include?(char.downcase)
        double_consonants << repeater(char)
      else
        double_consonants << char
      end

  end
  double_consonants

end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") #== "HHellllo-WWorrlldd!"
p double_consonants("July 4th") #== "JJullyy 4tthh"
p double_consonants('') == ""