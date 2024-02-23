=begin

Factorial: Write a Ruby method that takes a non-negative integer n and returns the factorial of n.
ruby
Copy code
# Your implementation here


input:
  -An integer

Output:
  -The factorial of the input number


Algorithm:
  -Create an array from 1 upto the input number
  -Multiply all the numbers in the array


=end


def factorial(num)
  return 1 if num == 0
  1.upto(num).to_a.reduce(:*)

end


p factorial(5) # Expected output: 120 (5! = 5 * 4 * 3 * 2 * 1)
p factorial(0) # Expected output: 1 (0! = 1

