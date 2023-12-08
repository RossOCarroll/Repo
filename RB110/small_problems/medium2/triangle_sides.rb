=begin

A triangle is classified as follows:

equilateral All 3 sides are of equal length
isosceles 2 sides are of equal length, while the 3rd is different
scalene All 3 sides are of different length

To be a valid triangle, the sum of the lengths of the two shortest sides must be 
greater than the length of the longest side, and all sides must have lengths greater 
than 0: if either of these conditions is not satisfied, the triangle is invalid.

Write a method that takes the lengths of the 3 sides of a triangle as arguments, 
and returns a symbol :equilateral, :isosceles, :scalene, or :invalid depending 
on whether the triangle is equilateral, isosceles, scalene, or invalid.

input:
  -Three integers all representing the sides of a triangle

Ouput:
  -Symbol denoting if the triangle is valid, equilateral, isosceles or scalene

Explicit requirments:
  -must return a symbol
  -Takes 3 arguments

Test Cases // Exsamples

triangle(3, 3, 3) == :equilateral
triangle(3, 3, 1.5) == :isosceles
triangle(3, 4, 5) == :scalene
triangle(0, 3, 3) == :invalid
triangle(3, 1, 1) == :invalid

Data Structure:
  -integers
  -symbols

  assisting:
    -Array

Algorithm:
  -Save the three arguments into a collection
  -Organize the collection from lowest to highest
  -Determine if the triangle is valid
    -Sum of the 0 index plus the 1 index is greater then the 2 index
    -if nit the return invalid
  -Determine if all three sides are equal
    -if true return equilateral
  -Determine if 2 side are equal
      - return isosceles
  -Determine is all sides are of differnt length
    -return scalene

=end

def triangle(side_1, side_2, side_3)
  tri_array = [side_1, side_2, side_3].sort

  if (tri_array[0] + tri_array[1]) <= tri_array[2]
    :invalid
  elsif tri_array[0] == tri_array[1] && tri_array[0] == tri_array[2]
    :equilateral
  elsif  tri_array[0] == tri_array[1] || tri_array[1] == tri_array[2]
    :isosceles
  else
    :scalene
  end
end

p triangle(3, 3, 3) #== :equilateral
p triangle(3, 3, 1.5) #== :isosceles
p triangle(3, 4, 5) #== :scalene
p triangle(0, 3, 3) #== :invalid
p triangle(3, 1, 1) #== :invalid