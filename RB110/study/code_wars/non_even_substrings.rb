=begin

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

Input:
  -String of integers

Output:
  -The number of odd numbered substrings that can be formed

Explicit:

Implicit:
  -Return an integer

Questions?
  -Will there be an empty string?

Test cases:
p solve("1341") #,7)
p solve("1357") #,10)
p solve("13471") #,12)
p solve("134721") #,13)
p solve("1347231") #,20)
p solve("13472315") #,28)

Data structure:
  -String
  -Integer

Assisting
  -array


Algorithm:
  -Set a substrings variable to an empty array
  -Find all the substrings in input string
    -Split the input string into an array
      -From 0 to the length of the array minus 1
        -Slice From start index to ending index
          -Append all substrings to substring array
  -Iterate through substrings array
    -Convert substring in integers
    -get the sum of all integers
      -if sum is odd
        -Append to odd substring array
  -return size of sub string array

=end

def find_substrings(string)
  substrings = []

  (0..string.length - 1).each do |start_index|
    (start_index..string.length - 1).each do |end_index|
      substrings << string[start_index..end_index]
    end
  end
  substrings

end


def solve(string)
  substrings = find_substrings(string)
  odd_substrings = []

  substrings.each do |substring|
    number = substring.to_i
    odd_substrings << number if number.odd?
  end

  odd_substrings.size
end


#p solve("1341") #,7)
p solve("1357") #,10)
#p solve("13471") #,12)
#p solve("134721") #,13)
# p solve("1347231") #,20)
# p solve("13472315") #,28)