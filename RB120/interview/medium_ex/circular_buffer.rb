class CircularBuffer
  attr_accessor :buffer

  def initialize(size)
    @buffer = Array.new(size)
    @position = 0
    @oldest_item = 0
    @is_full = false
  end

  def get
    return nil if @buffer.all?(nil)
    
    returned = @buffer[@oldest_item]
    @buffer[@oldest_item] = nil
    @oldest_item = (@oldest_item + 1) % @buffer.size
    @is_full = false
    returned
  end

  def put(num)
    if @is_full
      @oldest_item = (@oldest_item + 1) % @buffer.size
    end
    
    @buffer[@position] = num
    @position = (@position + 1) % @buffer.size
    @is_full = true if @position == @oldest_item
  end
end

buffer = CircularBuffer.new(3)
puts buffer.get == nil

buffer.put(1)
buffer.put(2)
p buffer
puts buffer.get #== 1
p buffer

buffer.put(3)
buffer.put(4)
puts buffer.get == 2

buffer.put(5)
buffer.put(6)
buffer.put(7)
puts buffer.get == 5
puts buffer.get == 6
puts buffer.get == 7
puts buffer.get == nil

buffer = CircularBuffer.new(4)
puts buffer.get == nil

buffer.put(1)
buffer.put(2)
puts buffer.get == 1

buffer.put(3)
buffer.put(4)
puts buffer.get == 2

buffer.put(5)
buffer.put(6)
buffer.put(7)
puts buffer.get == 4
puts buffer.get == 5
puts buffer.get == 6
puts buffer.get == 7
puts buffer.get == nil