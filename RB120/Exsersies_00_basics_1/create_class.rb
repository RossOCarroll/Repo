module Walkable
  def walk 
    puts "Lets go for a walk!"
  end
end



class Cat
  include Walkable
  attr_accessor :name

  def initialize(n)
    @name = n
  end

  def greet
    puts "Hello im #{name} the cat!"
  end
end


kitty = Cat.new('Sophie')
kitty.greet
kitty.walk