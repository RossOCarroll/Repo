class Cat
  attr_accessor :name
  @@total = 0

  def initialize(name)
    @name = name
    @@total += 1
  end

  def self.generic_greeting
    puts "Hello! I'm a cat"
  end

  def personal_greeting
    puts "Hello! My name is #{self.name}"
  end

  def self.total
    @@total
  end
end

kitty = Cat.new('Sophie')
kitty = Cat.new('Bob')

p Cat.total