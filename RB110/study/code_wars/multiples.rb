=begin

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

 Input:
  -integer 

Output:
  -Integer: the sum of all the numbers that are leading up to the input integer that are multiples of 3 and 5

Explicit:
  -If number is a multiple of both 3 and 5 only count once

Test cases:
p soultion(10) # 23)
p soultion(20) # 78)
p soultion(200) # 9168)


Data structure:
  -Integers

Assisting structure:
  -Array

Algorithm
  -Set a multiples variable to an empty array
  -Loop from 0 up to input number
    -If number is multiple of 3 (num % 3 == 0) and 5 (num % 5 == 0)
      -append number to the multiples array
  -Return sum of multiples array

=end


def solution(ending_num)
  multiples = []

  0.upto(ending_num - 1) do |current_num|
    multiples << current_num if current_num % 3 == 0 || current_num % 5 == 0
  end
  multiples.sum
end



p solution(10) # 23)
p solution(20) # 78)
p solution(200) # 9168)