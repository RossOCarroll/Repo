=begin


Problem: Move Zeroes
Write a method move_zeroes that takes an array of integers nums and moves all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

-input
  -An array of integers

Output:
  -An array with all the non zero integers kept in relative order and all the 0 foved till the end

Algorithm:
  -iterate through the array
    -select all elements that are not zero
    -Select element that are zero
  -Append them back to the array and return


=end




def move_zeroes(nums)
  non_zero = []
  zero = []

  nums.each do |num|
    if num == 0
      zero << num
    else  
      non_zero << num
    end
  end
  zero.each {|zero| non_zero << zero}
  non_zero
end

# Test cases
p move_zeroes([0, 1, 0, 3, 12]) # Output should be [1, 3, 12, 0, 0]
p move_zeroes([0, 0, 0, 1, 2, 3]) # Output should be [1, 2, 3, 0, 0, 0]