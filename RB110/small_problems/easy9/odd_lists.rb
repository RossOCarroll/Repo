=begin

Write a method that returns an Array that contains every other element of an Array that is 
passed in as an argument. The values in the returned list should be those values that are 
in the 1st, 3rd, 5th, and so on elements of the argument Array.

Input:
  -Array of integers

Ouput:
  -Array with every other element of the input array

Rules:
  Implicit:
    -Elements in the input array can be any type of element
    -Empty array should return an empty array


Test Cases / Exsamples :

oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
oddities(['abc', 'def']) == ['abc']
oddities([123]) == [123]
oddities([]) == []
oddities([1, 2, 3, 4, 1]) == [1, 3, 1]

Data Structure:
  -Arrays


Algorithm
  -Set a reult array to an empty array
  -iterate though array
    -If index is even append element to result array
  -Return array

=end


def oddities(array)
  result_array = []

  array.each_with_index do |element, index|
    result_array << element if index.even?


  end
  result_array
end

def evens(array)
  evens = []
  index = 1

  while index < array.size
    evens << array[index]

    index += 2

  end
  evens

end


p evens([2, 3, 4, 5, 6]) #== [2, 4, 6]
p evens([1, 2, 3, 4, 5, 6]) #== [1, 3, 5]
p evens(['abc', 'def']) #== ['abc']
p evens([123]) #== [123]
p evens([]) #== []
p evens([1, 2, 3, 4, 1]) #== [1, 3, 1]


# p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
# p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
# p oddities(['abc', 'def']) == ['abc']
# p oddities([123]) == [123]
# p oddities([]) == []
# p oddities([1, 2, 3, 4, 1]) == [1, 3, 1]
