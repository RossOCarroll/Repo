=begin
What is PEDAC?
- disciplined, structural approach to solving programming problems
- First process the problem (PEDA), then code with intent (C)
=end

=begin
Given two integers, return an array of all prime numbers between the two integers.

primes_between(0, 5) == [2, 3, 5]
primes_between(40, 45) == [41, 43] 
primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
=end

=begin
P - Understanding the Problem:
- Goal: understand what you're being asked to do
  - Read the problem description
  - Identify expected input and output
  - Establish rules/requirements/define the boundaries of the problem
  - Ask clarifying questions
  - Take your time on this step!

Input: two integers
Output: an array of integers

Rules: Each element in the output array will be a prime number between the two argued numbers.
  - A prime number is a number with only two factors, 1 and itself
    - A factor is a number that the given number can be divided by with no remainder
  - Between: does this mean greater than or greater than/equal to?

E - Examples and Test Cases:
- Goal: further expand and clarify understanding about what you're being asked to do 
  - Use examples/test cases to confirm or refute assumptions made about the problem in the previous step

  - what if our arguments are structured like (5, 0 ) instead of (0,5)? - we SHOULD expect arguments in either order
  - what about negative integers? - NO NEED to handle negative inters
  - what if there are no prime numbers between the two argued numbers? - return an empty array.

D - Data Structures:
- Goal: begin to think logically about the problem
  - What data structures could we use to solve this problem?
    - What does our data look like when we get it? (input)
    - What does our data look like when we return it? (output?)
    - What does our data need to look like in the intermediate steps?

  Input: two integers, 0 or positive
  Output: an array of integers (all positive)
  Intermediate: an array of all numbers between the two input integers (0, 5) = [0, 1, 2, 3, 4, 5]
  An array of all prime numbers up to some large number? - Not useful, since we need to expect any size of integer.
  


A - Algorithm:
- Goal: write out steps to solve the given problem in plain English
  - A logical sequence of steps for accomplishing a task/objective
  - Start high level, but make sure you've thought through and have provided sufficient detail for working through the most difficult parts of the problem
  - Stay programming-language-agnostic
  - Can create substeps for different parts or separate concerns into a helper method
  - You can (and should) revisit your algorithm during the implementation stage if you need to refine your logic
  - Before moving onto implementing the algorithm, check it against a few test cases


Count from the lower argument to the higher argument.
  - Have some counter variable and iterate by 1 each time
At each value, check if it's prime.
  - How do we check if an integer is prime?
    - A prime number is a number with only two factors, 1 and itself
    - A factor is a number that the given number can be divided by with no remainder
    starting with the potential factor 2, check if every potential factor if this number divides evenly into the number. If so, it's prime.
    - Set some counter to 2. Check if it's a factor of the argued number. (when argument is divided by factor, remainder is 0). If it is, return 'false'
    - Keep incrementing and checking. Once we get to the last potential factor (the argument -1), return 'true.'
  If it's prime, add it to a 'results' array
return the results array

def primes_between(int1, int2)
  lower, higher = [int1, int2].sort
  results = []
  lower.upto(higher) do |value|
    results << value if is_prime?(value)
  end
  return results
end

def is_prime?(value)
  2.upto(value - 1) do |factor|
    return false if value % factor == 0
  end
  return true
end


primes_between(0, 5) == [2, 3, 5]
primes_between(40, 45) == [41, 43] 
primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]



C - Implementing a Solution in Code:
- Goal: translate the algorithm into your programming language of choice
  - Code with intent. Avoid hack and slash 
- TEST FREQUENTLY
  - Use the REPL or run your code as a file
  - When testing your code, always have an idea in place of what you're expecting
  - If you find that your algorithm doesn't work, return there FIRST if needed and THEN fix your code
=end


def primes_between(int1, int2)
  lower, higher = [int1, int2].sort
  results = []
  lower.upto(higher) do |value|
    results << value if is_prime?(value)
  end
  return results
end

def is_prime?(value)
  return false if value < 2
  2.upto(value - 1) do |factor|
    return false if value % factor == 0
  end
  return true
end


p primes_between(0, 5) == [2, 3, 5]
p primes_between(40, 45) == [41, 43] 
p primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]


=begin
Benefits:
- will save us time in the long run
- will help us avoid issues that often arise when we encounter a problem and try and jump straight to coding (i.e. hack and slash coding)
  - Failure to meet requirements of the problem
  - Failure to handle edge cases appropriately
  - Resulting solution is hard to read or maintain
  
Tips:
- Getting stuck is normal
- Make mistakes, learn from the mistakes, continue practicing
- Remember: PEDAC should help you. Find a way to make it work for you.

Common Mistakes:
- Not enough time spent parsing the problem (usually means not examining test cases for implicit rules)
- Fuzzy algorithm (not end-to-end path to the solution; maybe missing 1 critical piece)
- Lack of flexibility (not going back to the algorithm when necessary or algo isn't flexible)
- Lack of syntax fluency (unfamiliar with Ruby techniques and methods)
=end





=begin
What is PEDAC?
- disciplined, structural approach to solving programming problems
- First process the problem (PEDA), then code with intent (C)
=end

=begin
Given two integers, return an array of all prime numbers between the two integers.

primes_between(0, 5) == [2, 3, 5]
primes_between(40, 45) == [41, 43] 
primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
=end

=begin
P - Understanding the Problem:
- Goal: understand what you're being asked to do
  - Read the problem description
  - Identify expected input and output
  - Establish rules/requirements/define the boundaries of the problem
  - Ask clarifying questions
  - Take your time on this step!

Input: two integers
Output: an array of integers

Rules: Each element in the output array will be a prime number between the two argued numbers.
  - A prime number is a number with only two factors, 1 and itself
    - A factor is a number that the given number can be divided by with no remainder
  - Between: does this mean greater than or greater than/equal to?

E - Examples and Test Cases:
- Goal: further expand and clarify understanding about what you're being asked to do 
  - Use examples/test cases to confirm or refute assumptions made about the problem in the previous step

  - what if our arguments are structured like (5, 0 ) instead of (0,5)? - we SHOULD expect arguments in either order
  - what about negative integers? - NO NEED to handle negative inters
  - what if there are no prime numbers between the two argued numbers? - return an empty array.

D - Data Structures:
- Goal: begin to think logically about the problem
  - What data structures could we use to solve this problem?
    - What does our data look like when we get it? (input)
    - What does our data look like when we return it? (output?)
    - What does our data need to look like in the intermediate steps?

  Input: two integers, 0 or positive
  Output: an array of integers (all positive)
  Intermediate: an array of all numbers between the two input integers (0, 5) = [0, 1, 2, 3, 4, 5]
  An array of all prime numbers up to some large number? - Not useful, since we need to expect any size of integer.
  


A - Algorithm:
- Goal: write out steps to solve the given problem in plain English
  - A logical sequence of steps for accomplishing a task/objective
  - Start high level, but make sure you've thought through and have provided sufficient detail for working through the most difficult parts of the problem
  - Stay programming-language-agnostic
  - Can create substeps for different parts or separate concerns into a helper method
  - You can (and should) revisit your algorithm during the implementation stage if you need to refine your logic
  - Before moving onto implementing the algorithm, check it against a few test cases


Count from the lower argument to the higher argument.
  - Have some counter variable and iterate by 1 each time
At each value, check if it's prime.
  - How do we check if an integer is prime?
    - A prime number is a number with only two factors, 1 and itself
    - A factor is a number that the given number can be divided by with no remainder
    starting with the potential factor 2, check if every potential factor if this number divides evenly into the number. If so, it's prime.
    - Set some counter to 2. Check if it's a factor of the argued number. (when argument is divided by factor, remainder is 0). If it is, return 'false'
    - Keep incrementing and checking. Once we get to the last potential factor (the argument -1), return 'true.'
  If it's prime, add it to a 'results' array
return the results array

def primes_between(int1, int2)
  lower, higher = [int1, int2].sort
  results = []
  lower.upto(higher) do |value|
    results << value if is_prime?(value)
  end
  return results
end

def is_prime?(value)
  2.upto(value - 1) do |factor|
    return false if value % factor == 0
  end
  return true
end


primes_between(0, 5) == [2, 3, 5]
primes_between(40, 45) == [41, 43] 
primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]



C - Implementing a Solution in Code:
- Goal: translate the algorithm into your programming language of choice
  - Code with intent. Avoid hack and slash 
- TEST FREQUENTLY
  - Use the REPL or run your code as a file
  - When testing your code, always have an idea in place of what you're expecting
  - If you find that your algorithm doesn't work, return there FIRST if needed and THEN fix your code
=end


def primes_between(int1, int2)
  lower, higher = [int1, int2].sort
  results = []
  lower.upto(higher) do |value|
    results << value if is_prime?(value)
  end
  return results
end

def is_prime?(value)
  return false if value < 2
  2.upto(value - 1) do |factor|
    return false if value % factor == 0
  end
  return true
end


p primes_between(0, 5) == [2, 3, 5]
p primes_between(40, 45) == [41, 43] 
p primes_between(400, 500) == [401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]


=begin
Benefits:
- will save us time in the long run
- will help us avoid issues that often arise when we encounter a problem and try and jump straight to coding (i.e. hack and slash coding)
  - Failure to meet requirements of the problem
  - Failure to handle edge cases appropriately
  - Resulting solution is hard to read or maintain
  
Tips:
- Getting stuck is normal
- Make mistakes, learn from the mistakes, continue practicing
- Remember: PEDAC should help you. Find a way to make it work for you.

Common Mistakes:
- Not enough time spent parsing the problem (usually means not examining test cases for implicit rules)
- Fuzzy algorithm (not end-to-end path to the solution; maybe missing 1 critical piece)
- Lack of flexibility (not going back to the algorithm when necessary or algo isn't flexible)
- Lack of syntax fluency (unfamiliar with Ruby techniques and methods)
=end


=begin

Write a method that takes an array of consecutive letters as input and returns the missing letter.

p determine_missing_letter(['a','b','c','d','f']) == 'E'
p determine_missing_letter(['o','q','r','s']) == 'P'
p determine_missing_letter(['H','J','K','L']) == 'i'
p determine_missing_letter([]) == []


P & E
What do we mean by "missing letter"? In test cases, missing in terms of alphabetical order.

Why are results in opposite case to other argued letters? To what extent does our method need to be case-sensitive?

Will arrays contain unexpected integers or other other data types? 

What's a letter? one-character alphabetical string 

When we have an empty input array, return an empty array

What if we have mixed case inputs? This will not happen.

D Input: an array of string elements
Output: either a one-character string or an empty array (if we get an empty array argument)
Intermediate: array of all alphabetical characters in order
array of first argued char to last argued char, with no missing char.


A 
use some helper method to check whether the input array is empty. Do that at the start, and immediately return an empty array if so.
Create an array of first argued char to last argued char, with no missing char. e.g. ['a','b','c','d', 'e', 'f']
  - create an array of only the first character ['a']
  - add the next array element, the next character in alphabetical order ['a', 'b']
  - keep doing this until we add the last element
Compare this new array to our input array to find the missing element.
check the case of the missing element, and reverse the case.
=end