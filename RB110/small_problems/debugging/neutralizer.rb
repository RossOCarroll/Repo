def neutralize(sentence)
  words = sentence.split(' ')
  new_sentence = []
  words.each_with_index do |word, index|
    new_sentence << word if !negative?(word)
  end

  new_sentence.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.