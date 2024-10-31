class Boomerang
  def self.boomerang?(arr)
    return false if arr.size < 3

    arr.each_cons(2) do |a, b|
      return false if a == b
    end

    if arr[0] < arr[1]
      increasing = true
      middle = arr.max
      mid_index = arr.index(middle)
    elsif arr[0] > arr[1]
      increasing = false
      middle = arr.min
      mid_index = arr.index(middle)
    end

    first_half = arr[0...mid_index]
    second_half = arr[mid_index..-1]

    if array.size != 3
      return false if first_half.size < 2
      return false if second_half.size < 2
    end

    if increasing
      first_half.each_cons(2).all? { |a, b| a < b } &&
        second_half.each_cons(2).all? { |a, b| a > b }
    else
      first_half.each_cons(2).all? { |a, b| a > b } &&
        second_half.each_cons(2).all? { |a, b| a < b }
    end
  end
end


p Boomerang.boomerang?([1, 2, 3, 4])
p Boomerang.boomerang?([4, 3, 2, 1])