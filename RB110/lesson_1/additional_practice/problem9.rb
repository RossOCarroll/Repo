def titleize(string)
  array = string.split
  string_length = array.length
  new_string = ''

  counter = 0
  loop do
    array[counter].capitalize!

    counter += 1
    break if counter == string_length
  end
  array.join(' ')
  
end





words = "the flintstones rock yeah"

puts titleize(words)