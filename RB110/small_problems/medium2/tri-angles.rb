=begin

A triangle is classified as follows:

right One angle of the triangle is a right angle (90 degrees)
acute All 3 angles of the triangle are less than 90 degrees
obtuse One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and all angles 
must be greater than 0: if either of these conditions is not satisfied, the triangle is 
invalid.

Write a method that takes the 3 angles of a triangle as arguments, and returns a symbol 
:right, :acute, :obtuse, or :invalid depending on whether the triangle is a 
right, acute, obtuse, or invalid triangle.

You may assume integer valued angles so you don't have to worry about floating point errors.
 You may also assume that the arguments are specified in degrees.

 Input:
  -three integers representings the angles of a triangle

Ouput:
  -A symbol representing if the triangle is right, acute or obtuse or invalid

Rules:
  Explicit:
    -Return a symbol
    -Assume that input values are integers dont worry about floats
    -Arguments a specified by degrees

  Implicit:

  Ouestions?

Test cases / Exsamples:

triangle(60, 70, 50) == :acute
triangle(30, 90, 60) == :right
triangle(120, 50, 10) == :obtuse
triangle(0, 90, 90) == :invalid
triangle(50, 50, 50) == :invalid

data structure:
  -Integers
  -Symbols
Assiting structure:
  -Array

Algorithm:
  -Save the input arguments into an array
  -Determine if the triangle is valid
    -Sum all elements in array must equal 180
  -Determine if the triangle is a right triangle
    -One of the elements is equal to 90
  -Determine if the triangle is acute
    -All of the elements are less than 90
  -Determine if the triangle is obtuse
    -One angle is greater than 90


=end

def triangle(angle_1, angle_2, angle_3)
  triangle = [angle_1, angle_2, angle_3]

  
  if triangle.sum != 180 || triangle.any?(0)
    :invalid
  elsif triangle.any?(90) 
    :right
  elsif triangle.all? { |angle| angle < 90 }
    :acute
  else 
    :obtuse
  end

  

end

p triangle(60, 70, 50) #== :acute
p triangle(30, 90, 60)#== :right
p triangle(120, 50, 10)# == :obtuse
p triangle(0, 90, 90) #== :invalid
p triangle(50, 50, 50)# == :invalid

