def count(collection)
  truthy_collection = []

  collection.each do |ele|
    truthy_collection << ele if yield(ele)
  end
  truthy_collection.size
end

#Further Exploration

def count_1(collection)
  collection.delete_if { |ele| !yield(ele) }.size

end





p count_1([1,2,3,4,5]) { |value| value.odd? } == 3
p count_1([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count_1([1,2,3,4,5]) { |value| true } == 5
p count_1([1,2,3,4,5]) { |value| false } == 0
p count_1([]) { |value| value.even? } == 0
p count_1(%w(Four score and seven)) { |value| value.size == 5 } == 2