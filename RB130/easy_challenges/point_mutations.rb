=begin

input:
  -Two Strings representing strands of DNA

ouput:
  -The hamming number between the two strings

Problem:
  -We will be given two strands of DNA
  -We need to count the differences between them
  -If one is shorter we need to compare up to the length of the shorter strand

  -A constructor method that accepts a DNA strand as an argument. Does not raise any errors
  -A method that accepts a second DNA strand as an argument and returns the differences between the two
   strands - The Hamming difference

Data Structure:
  -String
  -Arrays

Constructor
  -Accept DNA strand string as an argument
  -Save to instance variable

Method compute hamming distance hamming_distance
  -Compare the lengths of both DNA strands to determine which is shorter
  -Set counter to 0
  -Based on the shorter strings length iterate through bother the DNA strand strings and com pare each character
    -If characters are different increment counter
=end

# The DNA class is used to calculate the Hamming distance between two DNA strands.
class DNA
  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(comparison)
    shorter = comparison.size < @strand.size ? comparison : @strand
    number = 0

    shorter.length.times do |index|
      number += 1 if @strand[index] != comparison[index]
    end

    number
  end
end
