def titleize(string)
  title = []
  string.split.map do |word|
    title << word.capitalize
  end
  title.join(' ')
end


words = "the flintstones rock"

p titleize(words)