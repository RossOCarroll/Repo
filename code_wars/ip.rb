=begin

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four
 octets, with values between 0 and 255, inclusive.

input:
  -string representing an ip address

output:
  - string representing a valid or invalid ip address

Explicit requirements
  -ip address are concidered valid if they have 4 groups of numbers with values between 0 to 255
  -leading zeros are invalid
  -inputs are gaurented to be a single string
Implicit:
  -return a string the "Valid IP Addresses" or "Invalid IP Addresses"

Questions?

Test cases // exsamples:
  Examples of valid inputs:
1.2.3.4
123.45.67.89

invalid:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Data Structure:
  -String
Assisting structure
  -Array

Algorithm:
  -set an ip array to the value of Split input string onto array
  - remove the '.' from array
  -iterate over array
    -confirm that array has 4 elements
    -confirm that each value is between 0 and 255
    -confirm that there are no leading zeros in each element
  -return valid or invalid string

=end

def ip_size?(input)
  input.size == 4
end

def ip_leading_zeros?(input)
  !input.map {|num| num[0].start_with?('0') && num.to_i.size > 1}.any? {|x| x == true}
end


def positive_integers?(array_of_strings)
  array_of_strings.all? do |str|
    /^\d+$/.match?(str) && str.to_i > 0
  end
end

def values(input)
  !input.map {|num| num.to_i >= 0 && num.to_i <= 255 }.any? {|x| x == false}
end


def is_valid_ip(ip)
  ip_array = ip.split('.')

  if ip_size?(ip_array) && positive_integers?(ip_array) && ip_leading_zeros?(ip_array) && values(ip_array)
    true
  else 
    false
  end
end

p is_valid_ip('1.2.3.4')
p is_valid_ip('1.2.3.4.5')
p is_valid_ip('123.045.067.256')
p is_valid_ip('-1.2.3.4')