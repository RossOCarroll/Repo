=begin

Input:
  -An array of integers

Ouput:
  -The index of the integer in the array where the sum of the integers on the right equal 
  the sum of the integers on the left

Explicit:
  -If there is no index where this will happen return -1

Questions
  -Will there be an emopty array

Algorithm:
  -Iterate over input array
    -Find the sub strings before and after each element in the array
      -If sub strings are equal to one another 
        -Return the index of the current number




=end

def find_index(array)
  result = array.each_with_index do |num, index|
    if index == 0
      before = []
      after = array[1..-1]
      return index if before.sum == after.sum
    else
    before = array[0..(index - 1)]
    after = array[(index + 1)..-1]

    return index if before.sum == after.sum
    end
  end
  if result == array
    -1
  else
    result
  end
end

p find_index([1, 2, 3, 4, 3, 2, 1])
p find_index([1, 100, 50, -51, 1, 1])
p find_index([1, 2, 3, 4, 5, 6])
p find_index([20, 10, -80, 10, 10, 15, 35])
p find_index([10, -80, 10, 10, 15, 35, 20])
