class Greeting
  def greet(string)
    puts string
  end
end


class Hello < Greeting
  def hi 
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end


hello = Hello.new 
goodbye = Goodbye.new

hello.hi
goodbye.bye




