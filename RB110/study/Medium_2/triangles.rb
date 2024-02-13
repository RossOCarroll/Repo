=begin


A triangle is classified as follows:

equilateral All 3 sides are of equal length
isosceles 2 sides are of equal length, while the 3rd is different
scalene All 3 sides are of different length
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the 
longest side, and all sides must have lengths greater than 0: if either of these conditions is not satisfied, 
the triangle is invalid.

Write a method that takes the lengths of the 3 sides of a triangle as arguments, 
and returns a symbol :equilateral, :isosceles, :scalene, or :invalid depending on whether the triangle 
is equilateral, isosceles, scalene, or invalid.

Examples:

Copy Code
triangle(3, 3, 3) == :equilateral
triangle(3, 3, 1.5) == :isosceles
triangle(3, 4, 5) == :scalene
triangle(0, 3, 3) == :invalid
triangle(3, 1, 1) == :invalid

Input:  
  -3 integers representing the sides of a triangle

Ouput:
  -A symbol representing what type of tringle is input 

Data structure
  -integers
  -symbols

Algorithm
  -Creat an array with the sides as elements
  -If All thre side are equal 
    -return :equilateral
  -If 2 sides are equal and the third not
    -return isosceles
  -If all sides are different lenth
    -return :scalene
  -If sum of min by 2 of the array is less than the third side
    -return invalid

=end


def triangle(side_1, side_2, side_3)
  tri_array = [side_1, side_2, side_3]
  shortest = [side_1, side_2, side_3].min(2).sum
  max = [side_1, side_2, side_3].max

  if shortest <= max
    :invalid
  elsif tri_array.all?(side_1)
    :equilateral
  elsif side_1 == side_2 || side_2 == side_3 || side_1 == side_3
    :isosceles
  elsif tri_array.uniq == tri_array
    :scalene
  
  end


end

  

p triangle(3, 3, 3) #== :equilateral
p triangle(3, 3, 1.5) #== :isosceles
p triangle(3, 4, 5) #== :scalene
p triangle(0, 3, 3) #== :invalid
p triangle(3, 1, 1) #== :invalid