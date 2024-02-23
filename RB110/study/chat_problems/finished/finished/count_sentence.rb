=begin


Algorithm:
  -Creating a hash where the keys are the words in the sentence and the values are the number of times the word appears
  -Split the input sentence into an array
  -Iterate over that array
    -for each word in the array get the count
      -Save the current element as the key in the hash and the count as the value
  -Return result hash


=end




def count_words(sentence)
  count_words = {}

  sentence.split.each do |word|
    if count_words.key?(word)
      count_words[word] += 1
    else
      count_words[word] = 1
    end
  end
  count_words
end

# Test cases
p count_words("the quick brown fox jumps over the lazy dog")  
# Output should be {"the"=>2, "quick"=>1, "brown"=>1, "fox"=>1, "jumps"=>1, "over"=>1, "lazy"=>1, "dog"=>1}

#puts count_words("apple banana apple cherry banana")  
# Output should be {"apple"=>2, "banana"=>2, "cherry"=>1}