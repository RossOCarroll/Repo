text = File.read('madlibs.txt')

# MAD_WORDS = 

# { :adjectives => ['quick', 'lazy', 'sleepy', 'ugly'],
#   :nouns => ['fox', 'dog', 'head', 'leg' ],
#   :verbs => ['jumps', 'lifts', 'bites', 'licks'],
#   :adverb => ['easily', 'lazily', 'noisily', 'excitedly']
# }

# new_sentence = text.split.map do |word|
#   case word
#   when '%{adjective}' then MAD_WORDS[:adjectives].sample
#   when '%{noun}' then MAD_WORDS[:nouns].sample
#   when '%{adverb}' then MAD_WORDS[:adverb].sample
#   when '%{verb}' then MAD_WORDS[:verbs].sample

#   else  
#     word

#   end
# end

# p new_sentence.join(' ')

ADJECTIVES = %w(quick lazy sleepy ugly).freeze
NOUNS      = %w(fox dog head leg cat tail).freeze
VERBS      = %w(spins bites licks hurdles).freeze
ADVERBS    = %w(easily lazily noisly excitedly).freeze

File.open('madlibs.txt') do |file|
  file.each do |line|
    puts format(line, noun:      NOUNS.sample,
                      verb:      VERBS.sample,
                      adjective: ADJECTIVES.sample,
                      adverb:    ADVERBS.sample)
  end
end