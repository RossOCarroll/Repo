def short_long_short(input_1, input_2)
  if input_1.size > input_2.size
    puts input_2 + input_1 + input_2
  else 
    puts input_1 + input_2 + input_1
  end
end

puts short_long_short('abc', 'defgh')
puts short_long_short('abcde', 'fgh')