=begin
In the easy exercises, we worked on a problem where we had to count the number of uppercase 
and lowercase characters, as well as characters that were neither of those two. Now we want 
to go one step further.

Write a method that takes a string, and then returns a hash that contains 3 entries: 
one represents the percentage of characters in the string that are lowercase letters, 
'one the percentage of characters that are uppercase letters, and one the percentage 
of characters that are neither.

You may assume that the string will always contain at least one character.


Input:
  -String

Output:
  - Hash that represents the percentage of uppercase lower case and neither in the input string

Rules:
    -Explicit
      -Assume that the string will contian at least one character

    -Implicit:
      -the values should be represented by a float
      -White spaces are concidered characters

Questions:

Test Cases // Exsamples:

letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }

Data structure:
  -String
  -Hash

assisting Structure
  -Array

Algorithm:
  -Split input string into characters
  -Create an output hash with the different catagories
  -iterate through characters array
    -Check if character is upper case, lowercase or neither
    -Add 1 to each value in the hash depending on the character
  -Transform the values to percentages
  -Return



=end

def find_percentage(num, length)
  num.to_f / length.to_f * 100

end

def letter_percentages(string)
  perc_hash = { :lowercase => 0.0, :uppercase => 0.0, :neither => 0.0}

  perc_hash[:lowercase] = find_percentage(string.count("a-z"), string.length).round(1)
  perc_hash[:uppercase] = find_percentage(string.count("A-Z"), string.length).round(1)
  perc_hash[:neither] = find_percentage(string.delete("a-z").delete("A-Z").length, string.length).round(1)

  perc_hash
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }
p letter_percentages('abcdefGHI')