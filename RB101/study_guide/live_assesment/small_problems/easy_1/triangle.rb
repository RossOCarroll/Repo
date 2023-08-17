def triangle(num)
  spaces = num - 1
  stars = 1

  num.times do |n|
    puts ('*' * stars) + (' ' * spaces)
    spaces -= 1
    stars += 1
  end
end






triangle(5)
