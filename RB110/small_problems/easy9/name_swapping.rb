=begin
Write a method that takes a first name, a space, and a last name passed as a 
single String argument, and returns a string that contains the last name, a comma, 
a space, and the first name.

Input:
  -String of a first and last name

Output:
  -String with the last name a ',' and the first name

Questions:
  -Will the be more than just a 2 word name?


Test cases / exsamples:

swap_name('Joe Roberts') == 'Roberts, Joe'


Data Structure:
  - String
  Assisting structure
    -Array

Algorithm:  
  -Split string into an array
    -Save first and last name 
  -Concatenate string with the last name first and first name last seperated by a comma


=end

def swap_name(name)
  first, last = name.split

  "#{last}, #{first}"

end


p swap_name('Joe Roberts') == 'Roberts, Joe'