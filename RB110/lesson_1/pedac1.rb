# # Suppose you have an arbitrary natural number (the target) and a set of one or more 
# additional natural numbers (the factors). Write a program that computes the sum of all 
# numbers from 1 up to the target number that are also multiples of one of the factors. 
# # For instance, if the target is 20, and the factors are 3 and 5, that gives us the list 
# of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
# # If no factors are given, use 3 and 5 as the default factors.


# input: 
#   - target number
#   - factors

# output:
#   - sum of numbers that are multiples of of one of the factors, up to the target number

# Implicit requirements:
#   - The multiples to be summed up must be unique
#   - the target value is the limit not concidered a multiples
#   - All numbers are natural

# Clarifying questions
#   - What are the posible values for the target number? Negitive numbers allowed?
#       Any natural number greater than 0
#   - How will the factors be provided to the program?
#       As an array
#   - What happens if only one number is provided as a factor?
#       Default to 3 and 5 if no factors are provided 

    
# Metal models:

#   - Determine a list of all multiples of a set of factors up to a target value, then filter 
#     the list of multiples to the unique values. Finally, compute and return the sum of the unique 
#     multiples.

#   - Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple 
#     to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.

# Examples / test cases


# Example 1

# Inputs:

# Target number: 20
# Factors: [3, 5]
# Output

# 78

# Example 2

# Inputs:

# Target number: 20
# Factors: [3]
# Output

# 63

# Example 5

# Inputs:

# Target number: 1
# Factors: []
# Output

# 0

# Example 6

# Inputs:

# Target number: 20
# Factors: [19]
# Output

# 19

# Data Structure:
#   - Array seems like a good fit for data structures.

# Algorithm

#   - Determine a list of all multiples of a set of factors up to a target value, then filter 
#     the list of multiples to the unique values. Finally, compute and return the sum of the unique 
#     multiples.

# 1. Create an empty array called multiples
# 2. Check weather the list of factors is empty? if there are no factors provided set list to [3, 5]
# 3. For every factor in the factors list:
#   1. Set the current_multiple to factor to keep track of the multiples of factor
#   2. While current_multiple < target
#     1. Append the current_multiple to multiples
#     2. Add factor to current_multiple
# 4. Filter duplicate numbers from multiples
# 5. Compute and return the sum of the numbers in multiples

# Code

def sum_of_multiples(target, factors)
  multiples = []
  factors = [3, 5] if factors.empty?
  
  factors.each do |factor|
    current_multiple = factor

    while current_multiple < target
      multiples << current_multiple 
      current_multiple += factor
    
    end
  end

  multiples.uniq.inject(0, :+)
end

puts sum_of_multiples(20, [3, 5])  # returns 78
puts sum_of_multiples(20, [3])     # returns 63
puts sum_of_multiples(20, [5])     # returns 30
puts sum_of_multiples(20, [])      # returns 78
puts sum_of_multiples(1, [])       # returns 0
puts sum_of_multiples(20, [19])    # returns 19