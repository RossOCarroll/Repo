=begin

Given a List [] of n integers , find minimum number to be inserted in a list, so that sum 
of all elements of list should equal the closest prime number .

Notes

List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input:
  -An array of integers

Output:
  -The minimum number to be inserted that the sum of the digits equal the closest prime number

Implicit:
  -if the sum of the input array is a prime return 0

Explicit 
    -list size will be at least 2 positive integers

Test Cases:
p minimum_number([3,1,2])#,1)
p minimum_number([5,2]#),0)
p minimum_number([1,1,1])#,0)
p minimum_number([2,12,8,4,6])#,5)
p minimum_number([50,39,49,6,17,28])#,2)

Data Structure:
  -Array
  -integers

Algorithm:
  -Create a helper method that checks if the number is a prime number
    -return false if num is less then or equal to  1
    -from 2 to the sqrt of number
      for each iteration check modulus iteratation number equal 0
  -Set a input number variable to 0
  -Get the sum of digits in array
  -Loop
      -Break if sum of digit plus input number is prime
      -increment input number by 1
  -Return input number

=end

def is_prime?(num)  
  return false if num <= 1

  (2..Math.sqrt(num)).each do |int|
    return false if num % int == 0
  end
  true
end

def minimum_number(array)
  input_num = 0

  until is_prime?(array.sum + input_num)
    input_num += 1
  end
  input_num
end


p minimum_number([3,1,2])#,1)
p minimum_number([5,2])#,0)
p minimum_number([1,1,1])#,0)
p minimum_number([2,12,8,4,6])#,5)
p minimum_number([50,39,49,6,17,28])#,2)