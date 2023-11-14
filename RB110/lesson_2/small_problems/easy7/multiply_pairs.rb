# Write a method that takes two Array arguments in which each Array contains a 
# list of numbers, and returns a new Array that contains the product of every pair 
# of numbers that can be formed between the elements of the two Arrays. The results 
# should be sorted by increasing value.

# You may assume that neither argument is an empty Array.

# Input:
#   - two arrays

# Output:
#   - A new array that has the product of every pair in the two arrays. Ouput sorted in increasing
#     value

# Rules:
#   Explicit:
#     - Return a new array
#     - Neither argument shall be an empty array
#   Implicit
#     - Elements are only integers?
#     - Arrays may differ in size

#   Test cases / Exsamples:

#   multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

#   Data Structure:
#     -Arrays

#   Algorithim:
#     -Set a result array to an empty array
#     -Iterate over array1
#       -Pass each element to array2
#         -Multipling each element
#         -Append product to result array
#     -Order result array by increasing value
#     -Return result



def multiply_all_pairs(array1 , array2)
  result_array = []

  array1.each do |num|
    array2.each do |num2|
    result_array << num  * num2
    end

  end
  result_array.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]