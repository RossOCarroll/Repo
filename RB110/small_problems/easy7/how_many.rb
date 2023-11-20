# Write a method that counts the number of occurrences of each element in a given array.

# The words in the array are case-sensitive: 'suv' != 'SUV'. Once counted, print 
# each element alongside the number of occurrences.

# Input:
#   -Array, list of vehicles

# Output
#   -Hash with the number of occurances of each vehicle from the input array.

# Rules:
#   Explicit:
#     -Words are cases sensitive

#   Implicit:
#     -Return a Hash

#   Questions:
#     -Are we return string / integer pairs 

# Test cases / Exsamples:

# vehicles = [
#   'car', 'car', 'truck', 'car', 'SUV', 'truck',
#   'motorcycle', 'motorcycle', 'car', 'truck'
# ]

# count_occurrences(vehicles)

# car => 4
# truck => 3
# SUV => 1
# motorcycle => 2

# Data structure
#   -Array
#   -Hash

# Algorithim:
#   -Create a count vehicles hash and assign cars to 0
#   -Iterate through vehicles array
#     -count the occurance of each element
#       -Assign occurance to corrospoding elemnet in hash
#   Return hash


def count_occurrences(vehicles_array)
  occurance_hash = {'car' => 0, 'truck' => 0, 'SUV' => 0, 'motorcycle' => 0}

  vehicles_array.each do |vehicle|
    occurance_hash[vehicle] = vehicles_array.count(vehicle)

  end
  occurance_hash

end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

p count_occurrences(vehicles)
  