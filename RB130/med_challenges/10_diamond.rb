# rubocop:disable all
=begin
The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

The first row contains one 'A'.
The last row contains one 'A'.
All rows, except the first and last, have exactly two identical letters.
The diamond is horizontally symmetric.
The diamond is vertically symmetric.
The diamond has a square shape (width equals height).
The letters form a diamond shape.
The top half has the letters in ascending order.
The bottom half has the letters in descending order.
The four corners (containing the spaces) are triangles.

Problem:
  We need to create a diamond of letters based on the input we recieve.

Test cases / Exsamples:
  -Create a diamond class
  -a method that accepts one argument a letter. This method should return a diamond based on the input letter
  This method should be a class method
  -The diamond always begins with the letter 'A' the second rown would be 'B' with one space inbetween ect.
  -We need to preserve the length of the longest row as each row should be the same amount of characters

Data Structure:
  -Strings
  -Array to help with building our diamond

Algorithm
  -make_diamond method
    -Create an array of a rage of letters: 'A' until the given letter ans the back to 'A' in reverse. Given letter
    only aprears once in this range.
    -Calculate the width of the diamond.. use a helper method
    -Iterate over the ranfe of letters, create a row for each current letter. ?Use a helper method
      -Center the row with spaces
      -Join all rows with a new line and append a final newline

  -Make_row
    - If current letter s 'A', return 'A'
    - If current letter is 'B', Return 'B B'
    - Create and return a string consisting of the current letter seperated by the approprate number of spaces

  -determine_spaces 
    - if the letter is 'A' return ''
    - if the letter is 'B' return ' '
    - Starting with the letter 'C', the amount of spaces needed is 3. Every subsequent letter needs 2 more spaces
      -loop to figure out the ammount of spaces needed based on this formula
      -Return the correct amount of spaces needed as a string
    
  -Determine width of diamond
    -If the letter is 'A' return 1
    -Otherwise determine number of spaces between letters and add 2 for the letters at either end
=end
# rubocop:enable all

class Diamond
  LETTERS = ('A'..'Z').to_a

  def self.make_range(letter)
    index = LETTERS.index(letter)
    range_front = LETTERS[0..index]
    range_back = range_front.reverse
    range_front.pop
    range_back.shift

    range_front + [letter] + range_back
  end

  def self.make_diamond(letter)
    letters_array = make_range(letter)
    width = width_of_diamond(letter)

    diamond = letters_array.map do |char|
      outside_spaces = ' ' * ((width - make_row(char).length) / 2)
      "#{outside_spaces}#{make_row(char)}#{outside_spaces}"
    end

    diamond.join("\n") + "\n"
  end

  def self.make_row(letter)
    case letter
    when 'A' then 'A'
    else letter + determine_spaces(letter) + letter
    end
  end

  def self.determine_spaces(letter)
    index = LETTERS.index(letter)

    if letter == 'A'
      ''
    else
      ' ' * ((index * 2) - 1)
    end
  end

  def self.width_of_diamond(letter)
    return 1 if letter == 'A'

    2 * (LETTERS.index(letter) + 1)
  end
end

puts Diamond.make_diamond('Z')
