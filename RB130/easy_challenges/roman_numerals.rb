=begin

Promblem: Convert and input integer into a string representation of roman numerals. 

I stands for 1
V stands for 5
X stands for 10
L stands for 50
C stands for 100
D stands for 500
M stands for 1,000
We don't have to worry about numbers higher than 3,000.
Modern Roman numerals are written by expressing each digit of the number separately, starting with the left most digit and skipping any digit with a value of zero

input:
  -integer

output:
  -A string representing the input integer coverted intp roman numerals

Data Structure:
  -integer
  -string
  -hash to carry a conversion from integer to roman numberal


Algorythm:
  -Create a RomanNumeral class that has two methods
    -A constructor method thst takes an integer as an argument
    -Roman numeral collection
      -Create a collection that links inportan Roman numberal string to their numeric counterparts
      -Ensure this is in decending order
    -A method to_roman that returns a roman numeral represtation of the input integer as a string
      -initialize a variable with an empty string to save the finish conversion
      -Iterate over the numberals collection
        -If the numeric value of the current Roman numeral is less than the value of the input number, add the Roman
        numerals to the string as many times as the value can fit.
        -Subtract the numeric valuer of the added Roman numerals from the current input value, and use the new input
        value in subsequent interations.
    -Return the string



=end


class RomanNumeral
  CONVERSION = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]

  def initialize(number)
    @number = number
  end

  def to_roman
    roman_numeral = ''

    CONVERSION.each do |pair|
      roman_num, value = pair
      while @number >= value
        roman_numeral += roman_num
        @number -= value
      end
    end
    roman_numeral
  end
end

