=begin

input:
  -array of strings

Ouput:
  -a string representing all the common prefixes in the input strings if any

Data Structure:
  -Strings
  -Arrays

Algorithm:
  -Set a prefix variable to an empty string
  -Set an index to 0
  -Iterate over input array of strings
    -If word at index is equal in all strings
      -append element to prefix variable
      -incrment index
    -else
      -Break
  -Return prefix


=end

def common_prefix(array)
  result = []
  max_index = array.min_by {|string| string.size}.size


  (0...max_index).each do |index|
    current_char = array[0][index]
    result << current_char if array.all? { |str| str[index] == current_char}
  end
  result.join
end


p common_prefix(['flower', 'flow', 'flight'])
p common_prefix(['interstellar', 'interspeacies', 'interstate'])
