=begin

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 
'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead 
of string in Crystal.

Input:  
  -A string representing a word

Output:
  -A hash where the key is a symbol representing a letter from the input string and the value is the ammount of occurancese

Rules:
  Explicit:
    -Key must be a symbol

Questions:
  -Will there be any numeric characters input?
  -An empty string input?

  
Test Cases // Exsamples:


p letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

Data Structure: 
  -Strings
  -Hashs

Asssiting:
  -Array

Algorithm:
  -Create an count hash
  -Split the input string into a array
  -Iterate over that array
    -for each character we want to get the count
      -Populate out count hash with the key as the current element 
        -Converted to a symbol 
      -The value ass the count of the current element in the input string

=end

def letterCount(string)
  letter_count = {}

  string.chars.each do |letter|
    letter_count[letter.to_sym] = string.count(letter)
  end
  letter_count
end


p letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
