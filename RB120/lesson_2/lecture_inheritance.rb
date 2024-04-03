class Pet

  def run
    'running'
  end

  def jump
    'jumping'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end

  def swim
    "swimming"
  end

  def fetch
    'fetching'
  end
end

class Bulldog < Dog
  def swim
    'Cannot swim'
  end
end

class Cat < Pet
  def speak
    'Meow'
  end
end



pete = Pet.new 
kitty = Cat.new
dave = Dog.new
bud = Bulldog.new

puts Bulldog.ancestors



