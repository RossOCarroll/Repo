# Write a method that takes a floating point number that represents an angle between 0 and 360 degrees 
# and returns a String that represents that angle in degrees, minutes and seconds. 
# You should use a degree symbol (°) to represent degrees, a single quote (') to represent minutes, 
# and a double quote (") to represent seconds. A degree has 60 minutes, while a minute has 60 seconds

# input:
#   -integer

# output:
#   -string

# explicit requirements:
#   -Ude a degree symbol
#   -single quote for minutes
#   -and double quote for seconds

# implicit requirments:


# Exsamples / Test cases

# dms(30) == %(30°00'00")
# dms(76.73) == %(76°43'48")
# dms(254.6) == %(254°36'00")
# dms(93.034773) == %(93°02'05")
# dms(0) == %(0°00'00")
# dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# Data structure:
#   -integer
#   -String
#   -Array?

# algorithm:
#   -Set degree and assign to the digits before the floating
#   -set the minutes ( * 60)
#     - assign whole number
#     - set seconds after decimal point
#   -set seconds ( * 60)
#   - return with degree comma and colon

DEGREE = "\xC2\xB0"

def to_string_round(integer)
  if integer < 10
    '0' + integer.round.to_s 
  else
    integer.round.to_s 
  end

end

def dms(num)
  degree = num.floor
  minutes = (num.modulo(1).round(3)) * 60
  seconds = (minutes.modulo(1).round(3)) * 60
  
   degree.to_s + DEGREE + to_string_round(minutes) + "'" + to_string_round(seconds) + '"'
  
end


dms(121.135)
dms(30) == %(30°00'00")
dms(76.73) == %(76°43'48")
dms(254.6) == %(254°36'00")
dms(93.034773) == %(93°02'05")
dms(0) == %(0°00'00")
dms(360) == %(360°00'00") || dms(360) == %(0°00'00")