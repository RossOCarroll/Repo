# Write a method that takes an array of strings, and returns an array of 
# the same string values, except with the vowels (a, e, i, o, u) removed.

# input:
#   - Array of strings

# Output:
#   - Array of strings

# questions
#   -Are we outputing the same collection or a new collection

# Test cases / Exsamples:
 
# remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# Data structure:
#   - Array

# Algorthim:
#   - iterate through collection
#   - delete if element contains (aeiou)


def remove_vowels(input)
  input.map do |string|
    string.gsub(/[aeiou]/i, '')
  end 
end


p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
puts remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
puts remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']