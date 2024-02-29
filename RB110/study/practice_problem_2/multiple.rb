=begin

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

-Input
  -A target number

Output:
  -The sum of all the numbers leading up to the target that are multiples of 3 or 5 or both

Explicit:
  -if number is a multiple of 3 and 5 it should only count once
  -If a negitive number is input return 0

Test Cases // Exsamples:

    test(10, 23)
    test(20, 78)
    test(200, 9168)


Data structure:
  -integers

Assisting structure:
  -Array

Algorithm:
  -Return 0 if input number is less then 3
  -Set a result array to an empty array
  -From 3 up to the target number
    -if number can be divided by 3, 5 or both evenly
      -Append number to result array
  -Sum result array and return

=end

def test(target)
  return 0 if target < 3
  multiples = []

  3.upto(target - 1) do |num|
    if num % 3 == 0
      multiples << num
    elsif num % 5 == 0
      multiples << num
    elsif num % 3 == 0 && num % 5 == 0
      multiples << num
    end
  
  end
  multiples.sum
end

p test(10)#, 23)
p test(20)#, 78)
p test(200)#, 9168)