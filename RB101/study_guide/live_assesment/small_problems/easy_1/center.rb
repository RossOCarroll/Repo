def center_of(input)
  if input.length.odd?
    puts input[input.length / 2]
  else 
    puts input[(input.length / 2) - 1] + input[input.length / 2]

  end

end




center_of('I love ruby') == 'e'
center_of('Launch School') == ' '
center_of('Launch') == 'un'
center_of('Launchschool') == 'hs'
center_of('x') == 'x'