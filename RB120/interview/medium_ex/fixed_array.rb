class FixedArray
  attr_reader :array

  def initialize(length)
    @array = Array.new(length)
  end

  def [](idx)
    @array.fetch(idx)

  end

  def []=(idx, ele)
    self[idx]
    @array[idx] = ele
  end

  def to_a
    @array.clone
  end

  def to_s
    to_a.to_s
  end

end






fixed_array = FixedArray.new(5)
puts fixed_array[3] == nil
p fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
p fixed_array.array
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'

begin
  fixed_array[6]
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end