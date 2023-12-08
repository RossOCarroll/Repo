=begin

Fibonacci Numbers (Recursion)

The Fibonacci series is a sequence of numbers starting with 1 and 1 where each number 
is the sum of the two previous numbers: the 3rd Fibonacci number is 1 + 1 = 2, the 4th is
 1 + 2 = 3, the 5th is 2 + 3 = 5, and so on. In mathematical terms:

Copy Code
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2
Sequences like this translate naturally as "recursive" methods. A recursive method 
is one in which the method calls itself. For example:

Copy Code
def sum(n)
  return 1 if n == 1
  n + sum(n - 1)
end
sum is a recursive method that computes the sum of all integers between 1 and n.

Recursive methods have three primary qualities:

They call themselves at least once.
They have a condition that stops the recursion (n == 1 above).
They use the result returned by themselves.
In the code above, sum calls itself once; it uses a condition of n == 1 
to stop recursing; and, n + sum(n - 1) uses the return value of the recursive call 
to compute a new return value.

Write a recursive method that computes the nth Fibonacci number, where nth is an 
argument to the method.

If you find yourself struggling to understand recursion, see this forum post. It's 
worth the effort learning to use recursion.

That said, this exercise is a lead-in for the next two exercises. It verges on the 
Advanced level, so don't worry or get discouraged if you can't do it on your own. 
Recursion is tricky, and even experienced developers can have trouble dealing with it.


Input:
  -Integer (nth) number

Output:
  -Integer representing the nth Fibonacci number

Rules:
  Explicit
    -Use a method that involves recurtion
  Implicit
    -Output an integer

  Questions?

Test Cases / Exsamples:

fibonacci(1) == 1
fibonacci(2) == 1
fibonacci(3) == 2
fibonacci(4) == 3
fibonacci(5) == 5
fibonacci(12) == 144
fibonacci(20) == 6765

Data structure:
  -Integers

Algorithm
  -If number is less that 2
    -Return number
  -Other wise
    -Call the fibonacci method on the number - 1 plus the fibonacci method on number - 2
  
=end

#With recursion

# def fibonacci(number)
#   if number < 2
#     number
#   else
#     fibonacci(number - 1) + fibonacci(number - 2)
#   end
# end

# p fibonacci(1) == 1
# p fibonacci(2) == 1
# p fibonacci(3) == 2
# p fibonacci(4) == 3
# p fibonacci(5) == 5
# p fibonacci(12) == 144
# p fibonacci(20) == 6765

#Procedural


# def fibonacci(number)
#   fib_seqence = [1, 1]
#   counter = 0
#   current_num = 0

#   until current_num.digits.count == number
#     current_num = fib_seqence[counter] + fib_seqence[counter + 1]
#     fib_seqence << current_num
#     counter += 1
#   end

#     fib_seqence[number - 1]
# end


# def fibonacci(nth)
#   first, last = [1, 1]
#   3.upto(nth) do
#     first, last = [last, first + last]
#   end
#   last
# end


# p fibonacci(20) == 6765
# p fibonacci(100) == 354224848179261915075
# p fibonacci(100_001)  #=> 4202692702.....8285979669707537501

def fibonacci_last(nth)
  last_2 = [1, 1]
  3.upto(nth) do
    last_2 = [last_2.last, (last_2.first + last_2.last) % 10]
  end

  last_2.last
end

p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
p fibonacci_last(123456789) # -> 4