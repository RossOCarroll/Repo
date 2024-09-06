=begin 
The Greek mathematician Nicomachus devised a classification scheme for natural numbers (1, 2, 3, ...), identifying each as belonging uniquely to the categories of abundant, perfect, or deficient based on a comparison between the number and the sum of its positive divisors (the numbers that can be evenly divided into the target number with no remainder, excluding the number itself). For instance, the positive divisors of 15 are 1, 3, and 5. This sum is known as the Aliquot sum.

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.
Examples:

6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
Write a program that can tell whether a number is perfect, abundant, or deficient.

Problem:
  -input: an integer
  -output: a string depending on if the input number is abundant, perfect or deficient
  -Perfect number is sum of the factors are equal to the number
  -Abundant number is sum of the factors are greater then the number
  -Deficient number is of the sum of the factors are less than the number
  -Factors are the numbers less than the input number that can be evenly divided into it.


Algorythm:
  -Create a PerfectNumber class
  -Create a helper method that returns factors of a number
  -create a class method that take a number as an argument
    -Raise and Argument error if input number is less and 0
    -Get the sum of the return value of factors method when number is input
      -If factors_sum is equal to input number
        -Return perfect 
      -if Factors sum is less than the input number
        -Return deficant 
      -else
        -Return abudant

=end


class PerfectNumber 
  
  def self.classify(num)
    raise StandardError if num < 0
    factors_sum = factors(num).sum

    if factors_sum == num 
      "perfect"
    elsif factors_sum < num 
      "deficient"
    else 
      "abundant"
    end
  end 

  private 

  def self.factors(number)
    factors_array = []
    1.upto(number - 1) do |num|
      factors_array << num if number % num == 0
    end

    factors_array
  end
end

