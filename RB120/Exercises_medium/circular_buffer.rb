class CircularBuffer
  attr_accessor :array

  def initialize(buffer_size)
    @array = Array.new(buffer_size)
    @oldest_index = 0
    @newest_index = 0
    @full = false
  end

  def get
    return nil if buffer_empty?

    element = @array[@oldest_index]
    @array[@oldest_index] = nil
    @oldest_index = (@oldest_index + 1) % @array.size
    @full = false
    element
  end

  def put(object)
    if @full
      @oldest_index = (@oldest_index + 1) % @array.size
    else 
      @full = (@oldest_index == (@newest_index + 1) % @array.size)
    end
  
    @array[@newest_index] = object
    @newest_index = (@newest_index + 1) % @array.size
  end

  private 

  def buffer_empty?
    !@full && @oldest_index == @newest_index
  end


end








buffer = CircularBuffer.new(3)
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