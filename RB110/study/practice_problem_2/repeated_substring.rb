=begin

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s 
is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Examples:

"ababab" ---> (t = "ab", k = 3)

"abcde" ---> (t = "abcde", k = 1)
because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.


input:
  -A string

output:
  -is the substring t and the maximum number of times the substring fits into the input string k

Rules:
  Explicit:
    -input string will be a non empty string
  Implicit:
    -Return substring and k in an array



  

Test cases //  exsamples

p f("ababab")# ["ab", 3])
p f("abcde")# ["abcde", 1])

Data Structure:
  -string
  -integers

Assiting Structure:
  -array

Algorithm:
  -Get every substring from the input string
    -Append to a substrings array
  -Iterate over substrings array
    -Loop untill substring is equal to or greater than input array
      -Set a counter to 0
        -Incrment substring + substring
        -increment the counter
        -Break if substring equals input string
  -Return substring and counter

=end


def into_substrings(string)
  substrings = []

  (0..string.length - 1).each do |start|
    (start..string.length - 1).each do |ending|
      substrings << string[start..ending]
    end
  end
  substrings.uniq
end


def f(string)
  substrings = into_substrings(string)

  substrings.each do |substring|
    counter = 0
    compared = []
    until compared.join.length >= string.length
      compared << substring
      counter += 1
      break if compared.join == string
    end
    if compared.join == string
      return [substring, counter]
    end
  end
  
end

p f("ababab")# ["ab", 3])
p f("abcde")# ["abcde", 1])