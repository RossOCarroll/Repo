def negative(x)
  x > 0 ? x *= -1 : x
end



puts negative(5) == -5
puts negative(-3) == -3
puts negative(0) == 0