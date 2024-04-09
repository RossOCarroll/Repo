# class Animal
#   def move
#   end
# end

# class Fish < Animal
#   def move
#     puts "swim"
#   end 
# end

# class Cat < Animal
#   def move
#     puts "walk"
#   end
# end

# class Sponge < Animal; end 
# class Coral < Animal; end 

# animals = [Fish.new, Cat.new, Sponge.new, Coral.new]
# animals.each { |animal| animal.move }



# module Coatable
#   def coating
#     "I'm covered in chocolate"
#   end
# end

# class JaffaCake
#   include Coatable
# end

# class Raisin
#   include Coatable
# end

# snacks = [JaffaCake.new, Raisin.new]
# snacks.each { |snack| puts snack.coating}


class Dog
  attr_reader :nickname

  def initialize(n)
    @nickname = n
  end

  def change_nickname(n)
    self.nickname = n
  end

  def greeting
    "#{nickname.capitalize} says Woof Woof!"
  end

  private
    attr_writer :nickname
end

dog = Dog.new("rex")
dog.change_nickname("barney")
puts dog.greeting # Displays: Barny says Woof Woof!
