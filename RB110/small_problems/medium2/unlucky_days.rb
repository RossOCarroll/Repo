=begin

Write a method that returns the number of Friday the 13ths in the year given by an argument. 
You may assume that the year is greater than 1752 (when the United Kingdom adopted the modern
 Gregorian Calendar) and that it will remain in use for the foreseeable future.


Input:
  -Integer representing a year

Ouput:
  -An integer representing how many fridays fall on the 13th of each month in the given year

Rules:
  -Explicit:
    -Assume the year is greater then 1752
  -Implicit
    -Return an integer

  -Questions?:
    -Will there be an input year greater than the year we are in?

Test cases / Exsamples:

friday_13th(2015) == 3
friday_13th(1986) == 1
friday_13th(2019) == 2

Data structure:
  -integers

Algorithm:
  -Set a day variable to 0
  -Set a friday the 13th variable to 0
  -Loop while day is less than 365
    -Check if day is friday an also the 13th?
    -if true increment the friday the 13th variable
  -Return friday the 13th variable

=end


require 'date'

def friday_13th(year)
  month = 1
  friday_13th = 0

  while month <= 12
    if Date.new(year, month, 13).friday?
      friday_13th += 1
    end
    month += 1
  end
  
  p friday_13th
end

friday_13th(2015) #== 3
friday_13th(1986) #== 1
friday_13th(2019) #== 2