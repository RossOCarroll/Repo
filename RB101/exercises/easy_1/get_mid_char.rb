def center_of(string)
  if string.length.even?
    puts string[string.length / 2 - 1] + string[string.length / 2]
  else
    puts string[string.length / 2]
  end
end

center_of('launch')

