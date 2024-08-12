# def any?(array)
#   return false if array.empty?
#   boolen_array = []

#   array.each do |element|
#     boolen_array << yield(element)
#   end
#   p boolen_array
#   trigger = boolen_array[0]
#   boolen_array.each do |boolean|
#     trigger = boolean if boolean != trigger
#   end
#   trigger
# end

def any?(array)
  return false if array.empty?

  array.each do |element|
    return true if yield(element)
  end

  false
end



p any?([1, 3, 5, 6]) { |value| value.even? } == true
p any?([1, 3, 5, 7]) { |value| value.even? } == false
p any?([2, 4, 6, 8]) { |value| value.odd? } == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| true } == true
p any?([1, 3, 5, 7]) { |value| false } == false
p any?([]) { |value| true } == false
p any?({ a: 2}) { |value| value.even? }