# Write a method that takes two arguments: the first is the starting number, and the second is 
# the ending number. Print out all numbers from the starting number to the ending number, 
# except if a number is divisible by 3, print "Fizz", if a number is divisible by 5, 
# print "Buzz", and finally if a number is divisible by 3 and 5, print "FizzBuzz".

# Input:
#   -A starting integers
#   -A ending integer

# Output
#   -Print out all numbers from the starting number to the ending number except if number
#     is divisible by 3 print "Fizz", if number is divisable by 5 prind 'buzz', if number is
#     disiable by 3 and 5 print 'fizzbuzz'.

# Rules:
#   Explicit:

#   I mplicit:
#     -print 


#   Questions:
#     -Print numbers as integers or strings?

# Test cases // exsamples:

#   -fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

# Data structure:
#   -integers
#   -Strings

# Algorithm:
#   -At starting number
#     - loop Starting number
#     - if starting number is divisable by 3 and 5 print 'FizzBuzz'
#     - if starting number is divisable by 3
#       print 'Fizz'
#     - if starting number is divisable by 5
#       print 'Buzz'
#     - else print starting number
#     - increment starting number by 1
#     - Break if starting number is greater than or equal to ending number

  
def fizzbuzz(starting_num, ending_num)
  loop do
    break if starting_num > ending_num
    if starting_num % 3 == 0 && starting_num % 5 == 0 
      puts "FizzBuzz"
    elsif starting_num % 3 == 0
      puts "Fizz"
    elsif starting_num % 5 == 0
      puts "Buzz"
    else
      puts starting_num
    end

    starting_num += 1
    
  end

end

puts fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
