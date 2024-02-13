=begin


A triangle is classified as follows:

right One angle of the triangle is a right angle (90 degrees)
acute All 3 angles of the triangle are less than 90 degrees
obtuse One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and all angles must be greater 
than 0: if either of these conditions is not satisfied, the triangle is invalid.

Write a method that takes the 3 angles of a triangle as arguments, and returns a symbol :right, :acute, :obtuse, 
or :invalid depending on whether the triangle is a right, acute, obtuse, or invalid triangle.

You may assume integer valued angles so you don't have to worry about floating point errors. You may also assume 
that the arguments are specified in degrees

Input:
  -Three integers represing the degress of a triangle

Ouput:
  -A symbol describing if the triangle is right acute, obstuse or invalid

Explicit:
  -integer values no floats 
  -

Test cases / exsamples:
triangle(60, 70, 50) == :acute
triangle(30, 90, 60) == :right
triangle(120, 50, 10) == :obtuse
triangle(0, 90, 90) == :invalid
triangle(50, 50, 50) == :invalid

Data Structure:
  -integers
  -symbols

Assisting:
  -An array

Algorithm:
  -Create an array out of the 3 input integers
  -Check if the input triangle is valid
    -Return invalid if any of the degrees are 0
    -Return invalid if the sum of the degrees are not equal to 180
  -Check if the any of the degrees are equal to 90
    -return right
  -Check if all degrees are under 90
    -return acute
  -Check if any degress at greater then 90

=end


def triangle(degree_1, degree_2, degree_3)
  tri_array = [degree_1, degree_2, degree_3]

  return :invalid if tri_array.any?(0)
  return :invalid if tri_array.sum != 180

  case 
  when tri_array.any?(90) then :right
  when tri_array.all? {|degree| degree < 90 } then :acute
  when tri_array.any? {|degree| degree > 90 } then :obtuse
  end


end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid
