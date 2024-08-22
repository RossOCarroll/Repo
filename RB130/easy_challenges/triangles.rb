=begin
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of 
any two sides must be greater than the length of the third side.


=end

class Triangle
  
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]

    raise ArgumentError, "Invalid Triangle" if @sides.all? { |side| side <= 0 }
    raise ArgumentError, "Invaild Triangle" if two_sides_less_than?(@sides)
  end

  def two_sides_less_than?(triangle)
    (triangle[0] + triangle[1]) <= triangle[2] || 
    (triangle[1] + triangle[2]) <= triangle[0] ||
    (triangle[0] + triangle[2]) <= triangle[1]
  end

  def kind
    first_element = @sides[0]
    if @sides.all? { |side| side == first_element}
      "equilateral"
    elsif @sides.uniq.size == @sides.size 
      "scalene"
    else 
      "isosceles"
    end
  end
  
end


# p triangle.kind