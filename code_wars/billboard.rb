def billboard(name, price = 30)
  total = 0
  name.size.times {|x| total += price}
  total
end

puts billboard("Hadufuns John",20)