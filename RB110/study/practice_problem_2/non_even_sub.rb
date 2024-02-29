=begin
  


Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Input:
  -String of integers

Output:
  -An integer representing the amount of odd numbered substring

Rules:
  -Return an integer

Questions?
  -Will there be an empty string input?

Test cases // Exsamples:

p solve("1341")#,7)
p solve("1357")#,10)
p solve("13471")#,12)
p solve("134721")#,13)
p solve("1347231")#,20)
p solve("13472315")#,28)

Data structure:
  -Strings
  -integers

Assisting structure:
  -Array


Algorithm:
  -Set a substrings array to an empty array
  -Create every possible substring from the input array
    -From 0.. string length - 1
      -start index to length of string - 1
        -Slice the input string from start index to end index
          -Append to substrings array if the substring coverted to integer is odd?
  -Return size of odd substring array


=end


def solve(string)
  odd_substrings = []

  (0..string.length - 1).each do |start_index|
    (start_index..string.length - 1).each do |end_index|
      odd_substrings << string[start_index..end_index] if string[start_index..end_index].to_i.odd?
    end
  end
  odd_substrings.size
end



p solve("1341")#,7)
# p solve("1357")#,10)
# p solve("13471")#,12)
# p solve("134721")#,13)
# p solve("1347231")#,20)
# p solve("13472315")#,28)


