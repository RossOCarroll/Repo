=begin
def reverse_words(sentence)
  sentence.split.each {|word| word.reverse! }.join(' ')
end

sample_sentence = 'Hello World'
p reverse_words(sample_sentence) # => 'olleH dlroW'

Without using the reverse method

Algorithm:
  -Set a Result variable to an empty array
  -Split input string into an array
  -iterate over split input string
    -For each word in string
      -create a reversed word array
      -creat and index and set -1
      -starting at index -1 append to reverse word
      -decremet index by 1
    -Append rev word to result array
  -join array and return

=end


def reverse_words(sentence)
  result = []

  sentence.split.each do |word|
    index = -1
    rev_word = []
    loop do 
      rev_word << word[index]
      index -= 1
      break if rev_word.size >= word.size
    end
    result << rev_word.join
  end
  result.join(' ')
  
end

sample_sentence = 'Hello World'
p reverse_words(sample_sentence) # => 'olleH dlroW'