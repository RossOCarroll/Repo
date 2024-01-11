hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

vowels = %w(a e i o u)

hsh.each do |key, value|
  value.each do |word| 
    word.chars {|letter| puts letter if vowels.include?(letter) }
  end
end