=begin


In the previous exercise, we developed a recursive solution to calculating the nth Fibonacci 
number. In a language that is not optimized for recursion, some (not all) recursive methods can be extremely 
slow and require massive quantities of memory and/or stack space.

Ruby does a reasonably good job of handling recursion, but it isn't designed for heavy recursion; as a result, 
the Fibonacci solution is only useful up to about fibonacci(40). With higher values of nth, the recursive 
solution is impractical. (Our tail recursive solution did much better, but even that failed at around 
fibonacci(8200).)

Fortunately, every recursive method can be rewritten as a non-recursive (procedural) method.

Rewrite your recursive fibonacci method so that it computes its results without recursion.

Examples:

Copy Code
fibonacci(20) == 6765
fibonacci(100) == 354224848179261915075
fibonacci(100_001) # => 4202692702.....8285979669707537501


Input:
  -An integer representing the number of fibonacci sequences

Ouput:
  -An integer representing the fibonacci number

Explicit:
  -May not use recurion in method

Data Structure:
  -Integers

Algorithm:
  -Set a fibonacci number variable to 0 
  -From 1 up to the input number
    -If number is equal to 1 or 2
      -Reassign fib number to 1
    -Else 
      -reassign fib number number - 1 + number - 2
  -Return fib number

=end

def fibonacci(nth)
  first, last = [1, 1]
  3.upto(nth) do
    first, last = [last, first + last]
  end

  last
end


# p fibonacci(20) #== 6765
# p fibonacci(100) == 354224848179261915075
# p fibonacci(100_001) # => 4202692702.....8285979669707537501

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