=begin
  

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of 
the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an 
empty array if a text contains no words.
Examples:

"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

--> ["a", "of", "on"]


"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

--> ["e", "ddd", "aa"]


"  //wont won't won't"

--> ["won't", "wont"]

input:
  -A string representing a text

Output:
  -An array of the three most used words in the input text

Rules:
  Explicit:
    -Word is a string from letters A-Z including apostrothes
    -Any other characters should be treated as a whitespace
    -Matches should be case sensitive
    -If a text contians fewer than 3 unique words the putput either the top 2 or top 1
    -return an emoty string if the the text is empty

Algorithm:
  -Set a empty hash 
  -Split the input string into an array of words
  -Iterate over input string 
    -Delete all non alphanumeric character
  -Iterate over new array
    -populate the hash with the key as the word and the value as how many times it occurs in the input text.
  -Take the top three keys with the highest value and return them into an array

=end


def top_3_words(text)
  count_hash = {}
  words_array = text.split 

  cleaned_array = words_array.map { |word| word.gsub(/[^0-9a-zA-Z']/, '')}

  cleaned_array.each do |word|
    count_hash[word] = cleaned_array.count(word) if word.size > 0 && !word.chars.all?("'")
  end 

  top_three = count_hash.max_by(3) { |_, v| v}&.map(&:first)
end



p top_3_words("a a a  b  c c  d d d d  e e e e e") #["e", "d", "a"])
p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")#, ["e", "ddd", "aa"])
p top_3_words("  //wont won't won't ")#, ["won't", "wont"])
p top_3_words("  , e   .. ")#, ["e"])
p top_3_words("  ...  ")#, [])
p top_3_words("  '  ")#, [])
p top_3_words("  '''  ")#, [])

p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.""")#, ["a", "of", "on"])
  