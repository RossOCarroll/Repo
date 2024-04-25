class Cat
  attr_reader :type

  def initialize(type)
    @type = type
  end

  def display_type
    puts "I am the #{type} cat"
  end
end

cat = Cat.new('brown')

cat.display_type