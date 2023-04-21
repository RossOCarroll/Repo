def triangle(num)
    space = num - 1
    stars = 1
    
    num.times do |n|
      puts (" " * space) + ("*" * stars)
      space -= 1
      stars += 1
    end
end


triangle(9)