# Write a method that takes an Array of Integers between 0 and 19, and returns an Array 
# of those Integers sorted based on the English words for each number:

# zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, 
# twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

# input:
#   -array

# output:
#   -array

# Explicit requirements:
#   -Output array should be ordered in alphabetical ordered

# Implicit Requirments:
#   -Output array should be Integers

# Questions:
#   - Should the method take up to any size number / array?

# Examples / Test cases

# alphabetic_number_sort((0..19).to_a) == [
#   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
#   6, 16, 10, 13, 3, 12, 2, 0
# ]

# Data Structure:
#   - Array

# Algorithm:
#   - Convert inout array into alphanumberic elements
#   - Order the array alphabetically
#   - Convert array back to Integers

NUMBERS = {19=>"nineteen",
  18=>"eighteen",
  17=>"seventeen", 
  16=>"sixteen",
  15=>"fifteen",
  14=>"fourteen",
  13=>"thirteen",              
  12=>"twelve",
  11 => "eleven",
  10 => "ten",
  9 => "nine",
  8 => "eight",
  7 => "seven",
  6 => "six",
  5 => "five",
  4 => "four",
  3 => "three",
  2 => "two",
  1 => "one",
  0 => "zero"
}

def alphabetic_number_sort(array)
  alpha_array = NUMBERS.values.sort

  output_array = []
  
  alpha_array.each do |num|
    output_array << NUMBERS.key(num)


  end
  output_array
end

# NUMBER_WORDS = %w(zero one two three four
#   five six seven eight nine
#   ten eleven twelve thirteen fourteen
#   fifteen sixteen seventeen eighteen nineteen)

# def alphabetic_number_sort(numbers)
# numbers.sort_by { |number| NUMBER_WORDS[number] }
# end

p alphabetic_number_sort((0..19).to_a) == [
   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
   6, 16, 10, 13, 3, 12, 2, 0
 ]