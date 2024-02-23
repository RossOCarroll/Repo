#String#upcase! is a destructive method, so why does this code print HEY you instead of HEY YOU? Modify the code 
#so that it produces the expected output.


def shout_out_to(name)
  upname = name.chars.map { |c| c.upcase } 

  puts 'HEY ' + upname.join
end

shout_out_to('you') # expected: 'HEY YOU'


=begin
  
Becasue the each method returns the orginal object its called on it does not modify the name variable. Also the upcase
method is only called on the single characters in the array not on the object itself.


=end

