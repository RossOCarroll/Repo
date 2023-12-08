# The time of day can be represented as the number of minutes before or after midnight. 
# If the number of minutes is positive, the time is after midnight. If the number of 
# minutes is negative, the time is before midnight.

# Write a method that takes a time using this minute-based format and returns the time 
# of day in 24 hour format (hh:mm). Your method should work with any integer input.

# You may not use ruby's Date and Time classes.

# Input: 
#   - integer

# Output:
#   - String

# Explicit requirments:
#   - May not use Time and Date classes

# Implicit Requirements:
#   - Input of 0 should output the string '00:00'

# Test cases / Exsamples

# time_of_day(0) == "00:00"
# time_of_day(-3) == "23:57"
# time_of_day(35) == "00:35"
# time_of_day(-1437) == "00:03"
# time_of_day(3000) == "02:00"
# time_of_day(800) == "13:20"
# time_of_day(-4231) == "01:29"

# Algorithm:
#   - if input is 0 return "00:00"
#   - Set output_string
#   - else if input is > 0
#     - output_string is equal to 2400 - input
#   - else if input string is greater than zero
#     - add input to 0000 save in output_string
#   -format output_string to millitary time.. return

MIN_IN_DAY = 1440
  
def time_of_day(minutes)
  minutes_per_day = 1440

  minutes = (minutes % minutes_per_day + minutes_per_day) % minutes_per_day


  hours = minutes / 60
  minutes %= 60

  format('%02d:%02d', hours, minutes)
end

puts time_of_day(0) #== "00:00"
puts time_of_day(-3) #== "23:57"
puts time_of_day(35) #== "00:35"
puts time_of_day(-1437) #== "00:03"
puts time_of_day(3000) #== "02:00"
puts time_of_day(800) #== "13:20"
puts time_of_day(-4231) #== "01:29"