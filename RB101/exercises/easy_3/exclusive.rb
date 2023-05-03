def xor(x , y)
  return true if x && !y
  return true if y && !x
  false
end

puts xor(5, 5)