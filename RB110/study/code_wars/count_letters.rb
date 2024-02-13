=begin
  
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 
'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead 
of string in Crystal.


Input:
  -String

Output:
  -Hash that has the keys as every letter from the input string and the values as the letter count

Explicit: 
  -keys must be symbols

Questions
  -Will the hash keys have to be in alphabetical order?
  -Will the input string be all lower case?

Test cases:

p letter_count('codewars') # {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
p letter_count('activity') #{:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1})
p letter_count('arithmetics') #{:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})

Data structure: 
    -String 
    -Hash
Asisting structure:
  -array

Algorithm
    -Split input string into an array
    -Set a result hash to an empty hash
    -Iterate over input array
      -set a count variable
        -for each iteration count the number off acurences of the current letter that happen in the input string
        -transform current letter to a symbol
        -append current symbol as a key and the count as a value to the result hash
    -Sort the array alphabetically

=end



def letter_count(string)
  letter_count = {}
  string.chars.each do |letter|
    count = string.count(letter)
    letter_count[letter.to_sym] = count
  end
  letter_count.sort.to_h
end

p letter_count('codewars') # {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
p letter_count('activity') #{:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1})
p letter_count('arithmetics') #{:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})