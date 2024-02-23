=begin

FizzBuzz: Write a Ruby method that takes a number as input and returns an array containing "Fizz" for multiples 
of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both 3 and 5, and the number itself for all other 
numbers up to the input number.


input:
  -an integer

Output:
  -An array with Fizzbuzz as multiples of 3 and 5 fizz as multiples of 3 and buzz as multiples of 5.. the rest can be integers

Questions
  - is zero a bultiple of 3 and 5?

Data Structure:
  -integers
  -Arrays 
  -strings

Algorithm:
  -Create a fizzbuzz array 
    -From 0 upto the input number append each number
  -iterate over the fizzbuzz array
    -if num is divible by 3 and not 5
      -reassign num to 'Fizz'
    -if num is divisable by 5 and not 3
      -reassign num to 'Buzz'
    -if num is divisble by 3 and 5
      -reassign num to 'Fizzbuzz'
  -return fizzbuzz array



=end



def fizzbuzz(n)
  fizzbuzz_array = []
  0.upto(n) {|num| fizzbuzz_array << num }

  fizzbuzz_array.map do |num|
    if num % 3 == 0 && num % 5 == 0
      "FizzBuzz"
    elsif num % 3 == 0 && num % 5 != 0
      'Fizz'
    elsif num % 3 != 0 && num % 5 == 0
      'Buzz'
    else 
      num
    end
  end
end

# Test cases
p fizzbuzz(15) # ["FizzBuzz", 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
