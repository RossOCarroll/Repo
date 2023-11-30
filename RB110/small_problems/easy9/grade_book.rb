=begin

Write a method that determines the mean (average) of the three scores passed to it, and 
returns the letter value associated with that grade.

Numerical Score Letter	Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. There is no need to check for negative values 
or values greater than 100.

input 
  -three integer values

Ouput:  
  -Letter a string of the value assicated with a grade

Explicit:
  -Tested values are between 1 and 100
  -No negative values or values greater than 100

Implicit:
  -Grading score should be in uppercase

Questions:
  -Will there always be 3 input grades?

Test cases /  Exsamples:
  
get_grade(95, 90, 93) == "A"
get_grade(50, 50, 95) == "D"

Data Structure:
  -Integers
  -Strings


Algorithm:
  - Set average to the sum of the input numbers divied by 3
  - Case If average 
    - is above or equal to 90
      -return 'A'
    - is above or equal to 80
      -return 'B'
    - is above or equal to 70
      -return 'C'
    - is above or equal to 60
      -return 'D'
    - is below 60
      -return 'F'    
=end

def get_grade(first, second, third)
  average = [first, second, third].sum / 3

  case average
  when 90..100
    'A'
  when 80..90
    'B'
  when 70..80
    'C'
  when 60..70
    'D'
  else
    'F'
  end
end



p get_grade(95, 90, 93) #== "A"
p get_grade(50, 50, 95) == "D"