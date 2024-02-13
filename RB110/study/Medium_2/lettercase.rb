=begin

In the easy exercises, we worked on a problem where we had to count the number of uppercase and lowercase 
characters, as well as characters that were neither of those two. Now we want to go one step further.

Write a method that takes a string, and then returns a hash that contains 3 entries: one represents the 
percentage of characters in the string that are lowercase letters, one the percentage of characters that are 
uppercase letters, and one the percentage of characters that are neither.

You may assume that the string will always contain at least one character.

Examples

Copy Code
letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }

Input:
  -A string

Ouput:
  -Hash with the keys uppercase lowercase and neither and the percentage as floats as values

Explicit:
  -String will always be at least one character

Data Structure:
  -Strings
  -Hash
  -Floats

Asssiting structure:
  -Array

Algorithm:
  -Set a variable to a hash that contians symbols uppercase lowercase and neither to 0.0 floats
  -Split the input string into an array
  -Iterate over the array
    -Check if character is uppercase lower case or neither
      -get the count of each type and move to hash
  -Iterate over hash and turn values into percentages of the string
      

=end


def letter_percentages(string)
  string_size = string.size
  percentages = { lowercase: 0.0, uppercase: 0.0, neither: 0.0}

  string.chars.each do |letter|
   if letter.match?(/[a-z]/)
    percentages[:lowercase] += 1
   elsif letter.match?(/[A-Z]/)
    percentages[:uppercase] += 1
   else
    percentages[:neither] += 1
   end

  end
  percentages.transform_values {|perc| perc = perc * 100 / string_size}
end

  
p letter_percentages('abCdef 123') #== { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') #== { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') #== { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }