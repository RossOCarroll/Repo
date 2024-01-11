=begin
You need to write a password generator that meets the following criteria:

6 - 20 characters long
contains at least one lowercase letter
contains at least one uppercase letter
contains at least one number
contains only alphanumeric characters (no special characters)
Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - 
all characters should have less than 50% occurance. Based on extensive tests, the normal 
rate is around 35%.

-input:
  none
output:
  -A password that contians at least one lowercase, one upppercase, one number

Requirments:
Explicit:
  -Return password as a string
  -no speacial characters

Questions:
  -Do the passwords have to be random between 6-20 characters long?

Tes cases // exsamples:

Data Structure:
-Strings
Asissting Structure
-Array

Algorithm:
  -Create a collection of the alphabet in lowercase and uppercase
  -Create a collection of a range 0-9
  -Create an array with uppercase lowercase and num
  -Create a password variable to empty array
  -loop a random number of times between 6-20
    -Take random sample for the alphanumeric array
      -take a sample from whichever is pulled from the alphanumeric array
      -append to password array
  -Join password array and return

=end

LOWERCASE = ('a'..'z').to_a
UPPERCASE = ('A'..'Z').to_a
NUMBERS = ('0'..'9').to_a
ALPHANUMERIC = [LOWERCASE, UPPERCASE, NUMBERS]

def password_gen
  password = []
  length = (6..20).to_a.sample

  length.times do 
    password << ALPHANUMERIC.sample.sample
  end

  password.join
end


p password_gen()