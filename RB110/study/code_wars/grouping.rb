=begin

Your goal is to write the group_and_count method, which should receive and array as unique parameter and return 
a hash. Empty or nil input must return nil instead of a hash. This hash returned must contain as keys the unique 
values of the array, and as values the counting of each value.

Example usage:

input = [1,1,2,2,2,3]

group_and_count(input)# == {1=>2, 2=>3, 3=>1}

Input:
  -An array of integers

Ouput:
  -A hash with the integers as keys and the count of occurances the integer appears in the array as values

Explicit:
  -may not use count or length methods
  -Empty hash should return nil

Test cases:
p group_and_count([0,1,1,0])#, {0=>2, 1=>2})

Data Structure
  -arrays
  -integers
  -hash


Algorithm:
  -If input array is empty return nil
  -Set a result hash to an empty hash
  -Iterate over array
    -for each element iterate over array again
      -Set an occurances variable to 0
      -If number 1 is equal number 2
        -increment occurance variable
    -Append num 1 to the hash as a key and occurance as a value
  -return result hash

=end


def group_and_count(array)
  return nil if array == []
  result_hash = {}

  array.each do |num1|
    occurances = 0
    array.each do |num2|
      occurances += 1 if num1 == num2
    end
    result_hash[num1] = occurances
  end
  result_hash
end


p group_and_count([0,1,1,0])#, {0=>2, 1=>2})