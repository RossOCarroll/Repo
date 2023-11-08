words = "the flintstones rock"
title = words.split

title.map! do |word|
  word.capitalize
end

puts title.join(' ')