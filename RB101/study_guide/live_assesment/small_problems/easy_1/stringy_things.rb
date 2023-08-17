def stringy(size, default)
  numbers = []
  if default == 1
    size.times do |index|
      number = index.even? ? 1 : 0
      numbers << number
    end
  else
    size.times do |index|
      number = index.odd? ? 1 : 0
      numbers << number
    end
  end
  numbers.join

end




puts stringy(6, 1) == '101010'
puts stringy(9, 0) == '010101010'
puts stringy(4, 0) == '0101'
puts stringy(7, 1) == '1010101'