=begin 
Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all 
the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, 
use a default set of 3 and 5.

For instance, if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5,
we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

Problem:
  -We might be given a list of numbers for which we want to find the multiples of, or we might not
    -If no numbers are given we will us 3 and 5
  -We are also given a limiting value. We need to sum all of the multiples in the list up to but not including
    the limiting value.

Data Stucture:
  -integers
  -Array

Algorythm:
  -Create a Sumn OfMultiples class
    -create a constructor method that takes a list of numbers, if not specified we use 3 and 5 
    -create an instance method name 'to' that computes the sum of all the multiples of the list numbers that are less 
     argument given
      -Create an empty array to store multiples of list numbers
      -Iterate from 1m up to target number - 1 
        -If current number is a multiple of list numbers or default numbers add current number to multiples array
      -Return the sum of the multiples array
     -create a class or static method also named 'to' that does the same thing but defaults the numbers to 3 and 5

=end


class SumOfMultiples
  
  def initialize(*multiples)
    @multiples = multiples.empty? ? [3, 5] : multiples
  end

  def to(target_num)
    multiples = []

    1.upto(target_num - 1) do |current_num|
      @multiples.each do |possible_multiple|
        multiples << current_num if current_num % possible_multiple == 0
      end
    end

    multiples.uniq.sum
  end

  def self.to(target_num)
    list = SumOfMultiples.new 
    list.to(target_num)
  end
end


p SumOfMultiples.to(100)