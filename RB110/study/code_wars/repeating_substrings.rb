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

Input:
  -A non empty string

Ouput:
  -The minmun substring and the times it repeats within the given string in an array

Data structure:
  -String
  -Integer

Assigning
  -array
  -hash

Algorithm:
  -Set a substrings variable to an emoty array
  -Find all Sub string from the given string
  -Set a times hash variable to 0 
  -Iterate over substrings array
    -Set a times variable to 0
    -loop until substring is equal to input string
    -incrment the time variable by 1
    -Append the substring and times to the hash as key value pairs
  -Find the minum value on the key value pair and return in an array

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

def substring_times(string)
  substrings = find_substrings(string)#.select { |substring| substring.size > 1 }

  times_hash = {}

  substrings.each do |substring|
    times = string.size / substring.size
    reconstructed_string = substring * times

    times_hash[substring] = times if reconstructed_string == string
  end

  times_hash.empty? ? nil : times_hash.to_a[0]
end

p substring_times("ababab")#, ["ab", 3])
p substring_times("abcde")#, ["abcde", 1])

