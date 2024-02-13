=begin


Write a method that returns the number of Friday the 13ths in the year given by an argument. You may assume that 
the year is greater than 1752 (when the United Kingdom adopted the modern Gregorian Calendar) and that it will 
remain in use for the foreseeable future.

Examples:

Copy Code
friday_13th(2015) == 3
friday_13th(1986) == 1
friday_13th(2019) == 2



input:
  -An integer representing a year

Ouput:
  -An integer represeing how many fridays land on the 13th in that year

Expicit:

-Data structure
  -integers

Algorithm:
  -Set a friday counter
  -Loop through every every day 13th in a calender year up to 12 months
    -Use the Friday method to check if that iteration is a friday
      -If true increment friday counter
  -Return friday counter

=end

require 'date'

def friday_13th(year)
  friday_13th_counter = 0
  month = 1

  while month <= 12
    friday_13th_counter += 1 if Date.new(year, month, 13).friday?
    month += 1

  end
  friday_13th_counter

end

p friday_13th(2015) #== 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2
