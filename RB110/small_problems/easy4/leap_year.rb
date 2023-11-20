# In the modern era under the Gregorian Calendar, leap years occur in every year that 
# is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly 
# divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

# Assume this rule is good for any year greater than year 0. Write a method that takes any year 
# greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

# Input
#  - integer (year)

# output
#   - Boolean (true, false)

# Explicit requirements
#   - Return true or false if the year given is a leap year
#   - divisible by 4 except when also divisable by 100, if the year is divisable 100 then its not a leap
#     unless divisable by 400
#   - input is greater than 0


# Exsamples / Test Cases

# leap_year?(2016) == true
# leap_year?(2015) == false
# leap_year?(2100) == false
# leap_year?(2400) == true
# leap_year?(240000) == true
# leap_year?(240001) == false
# leap_year?(2000) == true
# leap_year?(1900) == false
# leap_year?(1752) == true
# leap_year?(1700) == false
# leap_year?(1) == false
# leap_year?(100) == false
# leap_year?(400) == true

# Data Structure:
#   -integers
#   -Booleans

# Algorithm:
  
#   1, Given the integer return true if integer is evenly divided by 4
#     1. expected when it is also dived by 100
#     2. if it is divisable by 100 and 400 return true


def leap_year?(year)
  if year % 400 == 0
    true
  elsif year % 4 == 0 && year % 100 != 0
    true
  else 
    false
  end
end


puts leap_year?(2016) == true
puts leap_year?(2015) == false
puts leap_year?(2100) == false
puts leap_year?(2400) == true
puts leap_year?(240000) == true
puts leap_year?(240001) == false
puts leap_year?(2000) == true
puts leap_year?(1900) == false
puts leap_year?(1752) == true
puts leap_year?(1700) == false
puts leap_year?(1) == false
puts leap_year?(100) == false
puts leap_year?(400) == true

