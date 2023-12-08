=begin

# For "x", determine how many positive integers less than or equal to "x" are odd but not 
prime. Assume "x" is an integer between 1 and 10000.

# Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer
 is 1
# Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the 
answer is 2

# A prime number (or a prime) is a natural number greater than 1 that has no positive 
divisors other than 1 and itself.


Input:
  -integer top of the range

Ouput:
  -integer representing how many numbers are odd but not prime numbers

Rules:
  Explicit:
    -
  Implicit:
    -Ouput should be an integer counting the number of odd numbers that are not prime
  Questions:
    -Are we allowed to use the prime? method

Test cases / exsamples:

p odd_not_prime(15) == 3
p odd_not_prime(48) == 10
p odd_not_prime(82) == 20

Data Structure:
  -Integers
Asssiting structure:
  -Array?

Algorithm:
  -Set a counter to count how many instances of odd numbers that are not prime
  -From 1 upto input number
    -Check to see if the number is odd? and also not prime
    -If true
      -Increment counter
  -Return counter



=end

def prime?(num)
  return false if num < 2

  (2..Math.sqrt(num)).none? { |i| (num % i).zero? }
end

def odd_not_prime(number)
  counter = 0

  1.upto(number) do |num|
    if num.odd? && !prime?(num)
      counter += 1
    end
  end
  counter
end


p odd_not_prime(15) #== 3
p odd_not_prime(48) #== 10
p odd_not_prime(82) #== 20