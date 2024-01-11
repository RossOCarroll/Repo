=begin

input:
  -Array of integers
Ouput
  -Array with duplicate numbers remoed

Questions?
  -Are we returning the same array?

Algorithm
  -Set a return array variable to an empty array
  -Iterate over input array
    -append element if its not cluded in the result array
  -Return array

=end

def remove_duplicates(array)
  result = []
  array.each do |num|
    result << num if !result.include?(num)
  end
  result
end

dup_array = [1, 2, 3, 1, 2, 4, 5]
p remove_duplicates(dup_array) # => [1, 2, 3, 4, 5]
