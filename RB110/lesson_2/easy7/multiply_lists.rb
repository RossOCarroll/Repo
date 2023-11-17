# Write a method that takes two Array arguments in which each Array contains a list of 
# numbers, and returns a new Array that contains the product of each pair of numbers 
# from the arguments that have the same index. You may assume that the arguments contain 
# the same number of elements.

# Input:
#   -Two arrays

# Output
#   -An array that has each element multiplied by the corrospoding element in both arrays

# Rules:
#   Explicit:
#     -Assume arrays have same number of elements

#   Implicit
#     -Array elements are integers

#   Questions
#     -Assume arrays are non - empty
#     -Creating a new array

#   Test Cases / Exsamples :

#   multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

#   Data Structure:
#     -arrays

#   Algorithim:
#     -Set a Multiplied array to and empty array
#     -Set a counter
#     -Iterate through array 1
#       -Multiply each element by array2 at counter index
#       -append result to multiplied array
#     -Return multiplied array


# def multiply_list(array1, array2)
#   multiplied_array = []
#   counter = 0

#   array1.each do |element|
#     multiplied_array << element * array2[counter]
#     counter += 1
#   end
#   multiplied_array
# end


# p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]


#Further exploration:

def multiply_list(array1, array2)
  array1.zip(array2) 
end

p multiply_list([3, 5, 7], [9, 10, 11]) #== [27, 50, 77]
