# Write a method that takes a year as input and returns the century. The return value should 
# be a string that begins with the century number, and ends with st, nd, rd, or th as 
# appropriate for that number.

# New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th 
# century.

# Input:
#   - integer (year)

# Output:
#   - Return century as a string

# Explicit requirments:
#   - Return value should be a string that begins with the century number.
#   - String should end with "st", 'nd', 'rd', or 'th'

# Implicit requirments:
#   - No negitive numbers starting at 0

# Mental model:
#   - Given the input year take the integers except the last to determine the century. If the 
    

# Exsamples /  Test cases

# century(2000) == '20th'
# century(2001) == '21st'
# century(1965) == '20th'
# century(256) == '3rd'
# century(5) == '1st'
# century(10103) == '102nd'
# century(1052) == '11th'
# century(1127) == '12th'
# century(11201) == '113th'

# Data Structure
#   - integer
#   - string

# Algorithm
#   1. from the input integer remove the last element and save to last_integer
#   2. Save the rest of the numbers to century_number


def century(year)
  century = year / 100 + 1
  century -= 1 if year % 100 == 0
  century.to_s + century_suffix(century)
end

def century_suffix(century)
  return 'th' if [11, 12, 13]. include?(century % 100)
  last_digit = century % 10

  case last_digit
  when 1 then 'st'
  when 2 then 'nd'
  when 3 then 'rd'
  else 'th'
  end
  
end


puts century(2000) == '20th'
puts century(2001) == '21st'
puts century(1965) == '20th'
puts century(256) == '3rd'
puts century(5) == '1st'
puts century(10103) == '102nd'
puts century(1052) == '11th'
puts century(1127) == '12th'
puts century(11201) == '113th'