x = [['a', 'b'], ['c', 'd'], ['e', 'f']].map do |sub_arr|
  C =  sub_arr.map do |letter|
    letter.upcase
  end
end


p C