


total = []

[["J", "D"], ["10", "H"]].each do |card|
  case card[0]
  when 'J', 'Q', 'K' then total << 10
  when 'A' then total << 11
  else total << card[0].to_i
  end

end

p total