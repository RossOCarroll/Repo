VOWELS = ["a", "e", "i", "o", "u"]

def remove_vowels(array)
  array.map do |string|
    chars = string.split("")
    VOWELS.each { |vowel| chars.delete(vowel) }
    chars.join
  end
  
end





p remove_vowels(['green', 'yellow', 'black', 'white']) == ['grn', 'yllw', 'blck', 'wht']
