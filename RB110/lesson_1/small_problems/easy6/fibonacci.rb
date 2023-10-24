# The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by definition,
#  and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

# Computationally, the Fibonacci series is a very simple series, but the results grow at an incredibly rapid rate. For example, 
# the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6 iterations 
# before it generates the first 2 digit number.

# Write a method that calculates and returns the index of the first Fibonacci number that has the number of 
# digits specified as an argument. (The first Fibonacci number has index 1.)

# input:
#   -integer


# output:
#   -integer of at what length in the fibbonacci sequence equals the number of digits in argument given

# Explicit requirments
#   - Argument will always be greater than or equal to 2

# Clarifying questions:
#   - Are Negitive numbers geving as an argument?

# Test Cases / Eaxsamples

# find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
# find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
# find_fibonacci_index_by_length(10) == 45
# find_fibonacci_index_by_length(100) == 476
# find_fibonacci_index_by_length(1000) == 4782
# find_fibonacci_index_by_length(10000) == 47847


# Data Structure:
#   - integer
#   - array

# Algorithm:
#   - Set fibbonacci sequence at 1
#   - set index_num to empty array
#   - set counter
#   - while input digits are less than or equal to current index 
#     - add sum of current index to previous index
#     - count number of elements in index_num
#   - return count


def find_fibonacci_index_by_length(digit_length)
  fib_seqence = [1, 1]
  counter = 0
  current_num = 0
 
  until current_num.digits.count == digit_length
    current_num = fib_seqence[counter] + fib_seqence[counter + 1]
    fib_seqence << current_num
    counter += 1
  end

    fib_seqence.count

end




p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847