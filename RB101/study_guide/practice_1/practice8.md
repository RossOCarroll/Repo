```ruby
a = 1 

loop do       
  puts a    
  a = a + 1   
  break      
end

puts a  
```

On line one the local varible 'a' is intialized and assigned to the integer 1. online 4 a loop method is invoked followed by a do..end block providing an argument. Line 5 we have the puts method called on a which will output 1 and return nil. on line 6 we have the varilble a being reassigned to the same value plus the integer 1 with + numeric operarot. A is now reasigned to 2. A break is then initated 'breaking' the program out of the loop. On line 10 we have the puts method called again on varible outputing 2 and returning nil. This demostrated rubys scoping rules for blocks because a block can access the outter scope but not vice versa. 