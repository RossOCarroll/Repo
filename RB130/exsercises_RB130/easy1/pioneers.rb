=begin
The following list contains the names of individuals who are pioneers in the field of 
computing or that have had a significant influence on the field. The names are in an 
encrypted form, though, using a simple (and incredibly weak) form of encryption called 
Rot13.

input:  
  -String of names encypted by rot 13

output
  -a string that represents the dicieferd string

Questions?
  -Are we outputing each name individally?


data structure:
  -Hash
  -strings

Algorythm:
  -Create a hash where the keys are the alphabet and the values are the corresponding rot 13 letter
  -Create an empty array
  -Split input string into an array
  -Iterate over split array
    -for ever key in hash 
      -append the coresponding value to the empty array
  -


=end

# def create_rot13_hash
#   lowercase_keys = ('a'..'z').to_a
#   uppercase_keys = ('A'..'Z').to_a
#   all_keys = lowercase_keys + uppercase_keys + [' ']

#   lowercase_values = 'nopqrstuvwxyzabcdefghijklm'.chars
#   uppercase_values = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.chars
#   all_values = lowercase_values + uppercase_values + [' ']

#   hash = {}

#   all_keys.each_with_index do |key, index|
#     hash[key] = all_values[index]
#   end

#   hash
# end

# ROT13_HASH = create_rot13_hash

# def decipher(name)
#   actual_name = []

#   name.split(//).each do |letter|
#     ROT13_HASH.each_pair do |key, value|
#       actual_name << value if key == letter
#     end
#     actual_name << ' '
#   end
#   actual_name.join
# end

# p decipher('Nqn Ybirynpr
# Tenpr Ubccre
# Nqryr Tbyqfgvar
# Nyna Ghevat
# Puneyrf Onoontr
# Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
# Wbua Ngnanfbss
# Ybvf Unvog
# Pynhqr Funaaba
# Fgrir Wbof
# Ovyy Tngrf
# Gvz Orearef-Yrr
# Fgrir Jbmavnx
# Xbaenq Mhfr
# Fve Nagbal Ubner
# Zneiva Zvafxl
# Lhxvuveb Zngfhzbgb
# Unllvz Fybavzfxv
# Tregehqr Oynapu')
# 

def create_rot13_hash
  lowercase_keys = ('a'..'z').to_a
  uppercase_keys = ('A'..'Z').to_a

  lowercase_values = 'nopqrstuvwxyzabcdefghijklm'.chars
  uppercase_values = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.chars

  hash = {}

  lowercase_keys.each_with_index do |key, index|
    hash[key] = lowercase_values[index]
  end

  uppercase_keys.each_with_index do |key, index|
    hash[key] = uppercase_values[index]
  end

  hash
end

ROT13_HASH = create_rot13_hash

def decipher(name)
  actual_name = []

  name.each_char do |letter|
    if ROT13_HASH.key?(letter)
      actual_name << ROT13_HASH[letter]
    else
      actual_name << letter
    end
  end

  actual_name.join
end

puts decipher('Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu')
