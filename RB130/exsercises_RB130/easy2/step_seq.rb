def step(start, ending, inc)
  output = start

  while output <= ending
    yield(output)
    output += inc 
  end
end


puts step(1, 10, 3) { |value| puts "value = #{value}" }