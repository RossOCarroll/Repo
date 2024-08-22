items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   yield(items)
#   puts "We've finished gathering!"
# end

# gather(items) do |*items, item1 |
#   puts items.join(', ')
#   puts item1
# end

# gather(items) do |item1, *items , item4 |
#   puts item1
#   puts items.join(', ')
#   puts item4
# end

# gather(items) do |item1, *items |
#   puts item1
#   puts items.join(', ')
# end
# 

# gather(items) do | item1, item2, item3, item4 |
#   puts "#{[item1, item2, item3].join(', ')}, and #{item4}"
# end


# 1
def gather(*produce, wheat)
  puts "Let's start gathering food."
  p produce
  puts wheat
  puts "We've finished gathering!"
end

# 2
def gather(apples, *vegetables, wheat)
  puts "Let's start gathering food."
  puts apples
  p vegetables
  puts wheat
  puts "We've finished gathering!"
end

# 3
def gather(apples, *assorted)
  puts "Let's start gathering food."
  puts apples
  p assorted
  puts "We've finished gathering!"
end

# 4
def gather(apples, corn, cabbage, wheat)
  puts "Let's start gathering food."
  puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
  puts "We've finished gathering!"
end

# method call

gather(*items) # notice we need a splat operator for passing in that array now.