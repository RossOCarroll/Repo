=begin
  

A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 
is prime since its only divisors are 1 and 23. However, 24 is not prime since it has 
divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number 
is prime, false if it is not prime.

You may not use Ruby's Prime class to solve this problem. Your task is to programmatically 
determine whether a number is prime without relying on any methods that already do that 
  for you.

Input:
  -An integer

OuTput:
  -True or false depending on weather the number is divisible by itself and 1

Explicit: 
  -May not use prime method

Test Cases 
puts(is_prime(1) == false)              # true
puts(is_prime(2) == true)               # true
puts(is_prime(3) == true)               # true
puts(is_prime(4) == false)              # true
puts(is_prime(5) == true)               # true
puts(is_prime(6) == false)              # true
puts(is_prime(7) == true)               # true
puts(is_prime(8) == false)              # true
puts(is_prime(9) == false)              # true
puts(is_prime(10) == false)             # true
puts(is_prime(23) == true)              # true
puts(is_prime(24) == false)             # true
puts(is_prime(997) == true)             # true
puts(is_prime(998) == false)            # true
puts(is_prime(3_297_061) == true)       # true
puts(is_prime(23_297_061) == false) 


data structure:
    -integers

Asssiting:
  -Array

Algorithm:
    -If input number is equal to 1 return false
    -result variable to true
    -from 1 up to input number - 1
      -reassign result to false if num % input number is 0
    -return result

=end

def is_prime(num)  
  return false if num <= 1

  (2..Math.sqrt(num)).each do |int|
    return false if num % int == 0
  end
  true
end


puts(is_prime(1) == false)              # true
puts(is_prime(2) == true)               # true
puts(is_prime(3) == true)               # true
puts(is_prime(4) == false)              # true
puts(is_prime(5) == true)               # true
puts(is_prime(6) == false)              # true
puts(is_prime(7) == true)               # true
puts(is_prime(8) == false)              # true
puts(is_prime(9) == false)              # true
puts(is_prime(10) == false)             # true
puts(is_prime(23) == true)              # true
puts(is_prime(24) == false)             # true
puts(is_prime(997) == true)             # true
puts(is_prime(998) == false)            # true
puts(is_prime(3_297_061) == true)       # true
puts(is_prime(23_297_061) == false) 