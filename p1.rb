# Given an integer array of numbers, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.
  
=begin
Input:
  -An array of integers

Ouput:
  -An integer that is closest to 0

Explicit requirments
  -If there are multiple answers return number with the largest value

Algorithm:
  
  -Iterate over array
    -Transform all the elements to a positive number
  -Set a current closest num variable to the first element in the input array
  -Iterate over array
    -If number is less than than current closest number
      -reassign number to closes number
  -Return current closest number



=end


def find_closest_number(array)
  # positive_array = array.map do |num| 
  #   if num < 0
  #     num * -1
  #   else  
  #     num
  #   end
  # end
  current_closest_num = array[0]

  array.each do |num|
    next if num == array[0]
    num_from_zero = num - 0
    current_closest_num = num if num < current_closest_num
  end
  current_closest_num
end

p find_closest_number([3,7,14,1,-1]) #== 1
p find_closest_number([2,5,7,-1]) #== -1
p find_closest_number([4,26,10,3]) #== 3
p find_closest_number([10]) #== 10
p find_closest_number([-4,-2,1,4,8]) #== 1
