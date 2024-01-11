statement = "The Flintstones Rock"

hash = {}

statement.chars.each do |letter|
  hash[letter] = statement.count(letter) if letter != ' '
end

p hash