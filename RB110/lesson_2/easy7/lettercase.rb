# Write a method that takes a string, and then returns a hash that contains 3 
# entries: one represents the number of characters in the string that are lowercase 
# letters, one represents the number of characters that are uppercase letters, and 
# one represents the number of characters that are neither.


# Input:
#   - string

# Output
#   - Hash contianing three entries: lowercase, upercase, neither, that coinsides with the 
#     counts of these elements within the string.

# Rules:
#   -Implicit requirments: 
#     - an empty string should return a hash with the values at 0

# Questions?
#   - What 


# Test Cases / Exsamples:

# letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# Data Structure:
#   - string
#   - Hash

# Algorithm:
#   -Set result hash and assign it to have the values of upper case lowewr case and neither
#     to 0
#   -iterate through string
#     -count lowercase elements in string
#       -assing to result hash lowercase values
#     -count uppercase elements in string
#       -assgning to result hash uppercase values
#     -count all neither elements in string
#       -assgn to result hash neighter values
#   - return result hash

def letter_case_count(string)
  result_hash = { lowercase: 0, uppercase: 0, neither: 0 }

  result_hash[:lowercase] = string.count("a-z")
  result_hash[:uppercase] = string.count("A-Z")
  result_hash[:neither] = string.delete("a-z").delete("A-Z").length

  
  result_hash
end


p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }