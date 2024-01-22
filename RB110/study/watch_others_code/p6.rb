=begin


Explicit:
  -Substring mus be at least 2 characters long
  -Case doesnt matter

Data Structure:
  -Strings
Assiting structure
  -Array

Algorithm:  
  -Set a result varable to an empty array
  -Down case both input strings
  -Split first string in to characters
    -iterate over array
      -If character is included in the 2nd array
        -append character to the result
  -if result array hash 2 or more characters return true 




=end


def substring_test(string1, string2)
  string1 = string1.downcase
  string2 = string2.downcase
  result_array = []

  string1.chars.each do |letter|
    result_array << letter if string2.include?(letter)
  end

  result_array.size >= 2 ? true : false

end






p substring_test('Something', 'Fun')
p substring_test('Something', 'Home')
p substring_test('Something', 'Fun')
p substring_test('Something', '')
p substring_test('', 'Something')
p substring_test('BANANA', 'banana')
p substring_test('1234567', '541265')
