=begin
Write a method that returns a list of all of the divisors of the positive integer passed in 
as an argument. The return value can be in any sequence you wish.

Input:
  -integer

  Output:
  -An array that represents all the divisors for the input number.

Ouestions?
  -What is a Divisor
    - A number that can be divided evenly with the number givin.
  -Will there 0 be given as an argument

Test cases / Examples:

divisors(1) == [1]
divisors(7) == [1, 7]
divisors(12) == [1, 2, 3, 4, 6, 12]
divisors(98) == [1, 2, 7, 14, 49, 98]
divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

Data Structure:
  -Arrays
  -Integers

Algorithym
  -Create and empty array
  -Starting from 1 up to the input number
    -if current number is divisable evenly with the input number
      -Append to empty array
  -Return array


=end

def divisors(num)
  divisors_array = []

  1.upto(num) do |current_num|
    divisors_array << current_num if num % current_num == 0
  end

  divisors_array
end


p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute