# Write a method that searches for all multiples of 3 or 5 that lie between 1 and 
# some other number, and then computes the sum of those multiples. For instance, if 
# the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

# You may assume that the number passed in is an integer greater than 1.


# Input
#   -integer (target number)

# Output
#   -insteger that is the sum of the multiples of 3 and 5 up to the target number,

# Explisit Requirments:
#   - input number will be a positive integer

# Implicit requirements:
#   - The multiples to be summed up must be unique
#   - the target value is the limit not concidered a multiples
#   - All numbers are natural


# Examples / Test cases

# multisum(3) == 3
# multisum(5) == 8
# multisum(10) == 33
# multisum(1000) == 234168

# Data Structure:
#   - Arrays
#   - Integers

# Algorithm
#   1. Save array as factors [3, 5]
#   2. create a multiple variable and save to an empty array
#   3. check for every factor up to the target number
#     1. set a current_multiple to keep track of the multiple
#     While current_multiple > target
#     1. applend current_multiple to multiples
#     2. Increment factor by current_multiple
#   4. Filter any dublicates from multiples
#   5. Calculate the sum of multiples

def multisum(target)
  factors = [3, 5]
  multiples = []

  factors.each do |factor|
    current_multiple = factor

    while current_multiple <= target
      multiples << current_multiple
      current_multiple += factor
    end
  end
  multiples.uniq.sum
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168

def multiple?(number, divisor)
  number % divisor == 0
end

def multisum2(max_value)
  sum = 0
  1.upto(max_value) do |number|
    if multiple?(number, 3) || multiple?(number, 5)
      sum += number
    end
  end
  sum
end

puts multisum2(3) == 3
puts multisum2(5) == 8
puts multisum2(10) == 33
puts multisum2(1000) == 234168