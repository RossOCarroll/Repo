class Cat
  COLOR = "purple"
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name} and im a #{COLOR} cat!"
  end
end

kitty = Cat.new("Sophie")
kitty.greet