# Write a method that combines two Arrays passed in as arguments, and returns a new Array 
# that contains all elements from both Array arguments, with the elements taken in 
# alternation.

# You may assume that both input Arrays are non-empty, and that they have the same 
# number of elements.


# Input:
#   - Two Arrays as arguments

# Outout:
#   - A new array contianing elments from both arrays with elements from input arrays
#     alertnating.

# Rules:
#   Explicit requirments:
#     -Assume that both arrays are non-empty and have same number of elements

#   Implicit:
#     - Arrays can contain any type of elements

# Ouestions:
#   - Do we start the collection with first array?

# Test Cases /  Exsamples:

#   interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# Data Structure:
#   - Arrays

# Algorithm:
#   - Initialize a result array assign to empty array
#   - Initialize a counter variable and set to 0
#   - Loop through both arrays starting at array 1
#     - append first element at counter to the result array
#     - append second element at counter to the result array
#     - increment counter by 1
#     - break loop when counter == first array size
#   - Return result array


def interleave(array1, array2)
  result_array = []
  counter = 0

    while array1.size > counter
      result_array << array1[counter]
      result_array << array2[counter]

      counter += 1

    end
    result_array
end


p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# Further Exploration

def interleave2 (array1, array2)
  array1.zip(array2)

end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']


