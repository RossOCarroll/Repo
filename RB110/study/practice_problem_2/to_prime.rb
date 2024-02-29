=begin

Task :

Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list
 should equal the closest prime number .

Notes

List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples

1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:

Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to 
prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:

Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to 
prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:

Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the 
sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .

input:
  -An array of integers that are non negitive and the array will be 2 greater

Output
  -Then minimum number that can be added to the list that when the list i summed it will equal a prime number

Rules:
  Explicit: 
    -List will be 2 or greater
    -The lis will only contian non negative numbers

Test cases // exsamples:
p minimum_number([3,1,2])#,1)
p minimum_number([5,2])#,0)
p minimum_number([1,1,1])#,0)
p minimum_number([2,12,8,4,6])#,5)
p minimum_number([50,39,49,6,17,28])#,2)


Data Structure:
  -Array
  -Integer

Algorithm:
  -Create a helper method to check if summed number is prime
    -If the number can be divided by 1 and iteself evenly
  -Set a new number varible to 1
  -Create a loop
    -Append nuw number to the input array
      -Set the sum of the input array
      -Break out of the loop if the summed number is prime
  -Return new number

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


# p minimum_number([3,1,2])#,1)
# p minimum_number([5,2])#,0)
# p minimum_number([1,1,1])#,0)
# p minimum_number([2,12,8,4,6])#,5)
p minimum_number([50,39,49,6,17,28])#,2)
