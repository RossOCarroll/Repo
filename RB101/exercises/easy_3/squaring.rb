def square(x)
  x * x
end

def multiply(x , y)
  x * y
end

def power(x)
  multiply(x, x) * multiply(x, x)
end

puts power(4)
