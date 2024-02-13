=begin

Given a list of integers and a single sum value, return the first two values (parse from the left please) in 
order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index 
is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

Input:
  -An array of integers and an integer

Ouput
  -An array that includes a pair of integers from the input array that matches the input integer

Explicit:
  -If no pair equals the input number return nil
  -If their are multiple pairs that sum to the input number return the pair whith the second elements lowest indices

Test cases:
p sum_pairs(l1, 8) #== [1, 7], "Basic: ["+l1.join(", ")+"] should return [1, 7] for sum = 8")
p sum_pairs(l2, -6) #== [0, -6], "Negatives: ["+l2.join(", ")+"] should return [0, -6] for sum = -6")
p sum_pairs(l3, -7) #== nil, "No Match: ["+l3.join(", ")+"] should return nil for sum = -7")
p sum_pairs(l4, 2)# == [1, 1], "First Match From Left: ["+l4.join(", ")+"] should return [1, 1] for sum = 2 ")
p sum_pairs(l5, 10) #== [3, 7], "First Match From Left REDUX!: ["+l5.join(", ")+"] should return [3, 7] for sum = 10 ")
p sum_pairs(l6, 8) #== [4, 4], "Duplicates: ["+l6.join(", ")+"] should return [4, 4] for sum = 8")
p sum_pairs(l7, 0) #== [0, 0], "Zeroes: ["+l7.join(", ")+"] should return [0, 0] for sum = 0")
p sum_pairs(l8, 10) #== [13, -3], "Subtraction: ["+l8.join(", ")+"] should return [13, -3] for sum = 10")


Data Structure
  -Arrays
  -Integers

Assisting
  -hash

Algorithm:
  -Set result variable to an empty hash
  -Iterate over the input array with index
    -For each character iterate over the input array
      -If number added to number in the array equals input number
        -Append to result hash
  -If result hash is empty return nil
  -Return key in the hash with the lowest value

=end

def sum_pairs(array, input_num)
  result_hash = {}

  array.each_with_index do |num1, index1|
    array.each_with_index do |num2, index2|
      next if index1 == index2

      result_hash[[num1, num2]] = index2 if num1 + num2 == input_num
    end
  end

  return nil if result_hash.empty?

  result_pair = result_hash.min_by {|_, index| index }
  result_pair.first.sort
end


l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

p sum_pairs(l1, 8) #== [1, 7], "Basic: ["+l1.join(", ")+"] should return [1, 7] for sum = 8")
p sum_pairs(l2, -6) #== [0, -6], "Negatives: ["+l2.join(", ")+"] should return [0, -6] for sum = -6")
# p sum_pairs(l3, -7) #== nil, "No Match: ["+l3.join(", ")+"] should return nil for sum = -7")
# p sum_pairs(l4, 2)# == [1, 1], "First Match From Left: ["+l4.join(", ")+"] should return [1, 1] for sum = 2 ")
# p sum_pairs(l5, 10) #== [3, 7], "First Match From Left REDUX!: ["+l5.join(", ")+"] should return [3, 7] for sum = 10 ")
# p sum_pairs(l6, 8) #== [4, 4], "Duplicates: ["+l6.join(", ")+"] should return [4, 4] for sum = 8")
# p sum_pairs(l7, 0) #== [0, 0], "Zeroes: ["+l7.join(", ")+"] should return [0, 0] for sum = 0")
# p sum_pairs(l8, 10) #== [13, -3], "Subtraction: ["+l8.join(", ")+"] should return [13, -3] for sum = 10")