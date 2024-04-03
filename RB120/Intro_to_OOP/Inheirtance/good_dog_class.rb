# class Animal
#   def speak
#     'Hello!'
#   end
# end

# class GoodDog < Animal
#   attr_accessor :name
#   def initialize(n)
#     self.name = n 
#   end

#   def speak 
#     super "#{self.name} says ARF!"
#   end
# end

# class Cat < Animal
# end

# sparky = GoodDog.new('Sparky')
# paws = Cat.new
# puts sparky.speak
# puts paws.speak

# class Animal
#   def speak 
#     "Hello!"
#   end
# end

# class GoodDog < Animal
#   def speak 
#     super + " from Good Dog class"
#   end
# end 

# sparky = GoodDog.new
# puts sparky.speak


# class Animal
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end
# end

# class GoodDog < Animal
#   def initialize(color)
#     super
#     @color = color
#   end 
# end 

# bruno = GoodDog.new("brown")

# class BadDog < Animal
#   def initialize(age, name)
#     super(name)
#     @age = age
#   end
# end 

# puts BadDog.new(2, 'bear')

# class Animal
#   def initialize
#   end
# end 

# class Bear < Animal
#   def initialize(color)
#     super()
#     @color = color 
#   end 
# end 

# p bear = Bear.new("black")


# module Swimmable
#   def swim 
#     "I'm Swimming"
#   end
# end 

# class Animal; end 

# class Fish < Animal
#   include Swimmable
# end 

# class Mammal < Animal
# end 

# class Cat < Mammal 
# end 

# class Dog < Mammal 
#   include Swimmable
# end 

# sparky = Dog.new 
# neemo = Fish.new 
# paws = Cat.new 

# puts sparky.swim
# puts paws.swim


# module Walkable
#   def walk 
#     "I'm walking"
#   end 
# end 

# module Swimmable
#   def swim 
#     "I'm swimming"
#   end 
# end 

# module Climbable
#   def climb 
#     "I'm Climbing"
#   end
# end 

# class Animal 
#   include Walkable 

#   def speak 
#     "I'm an animal and I speak"
#   end 
# end 

# class GoodDog < Animal
#   include Swimmable
#   include Climbable
# end 

# puts "---GoodDog method lookup---"
# puts GoodDog.ancestors

# module Mammal
#   class Dog
#     def speak(sound)
#       p "#{sound}"
#     end 
#   end 

#   class Cat  
#     def say_name(name)
#       p "#{name}"
#     end 
#   end 

#   def self.some_out_of_place_method(num)
#     num ** 2
#   end
# end 

# buddy = Mammal::Dog.new 
# kitty = Mammal::Cat.new 
# buddy.speak('ArF')
# kitty.say_name('kitty')

# value = Mammal::some_out_of_place_method(4)

# class GoodDog
#   DOG_YEARS = 7

#   attr_accessor :name, :age 

#   def initialize(n, a)
#     self.name = n 
#     self.age = a 
#   end 

#   def public_disclosure
#     "#{self.name} in human years is #{human_years}"
#   end


#   private

#   def human_years
#     age * DOG_YEARS
#   end 
# end 

# sparky = GoodDog.new("Sparky", 4)
# puts sparky.human_years


# class Person
#   def initialize(age)
#     @age = age
#   end

#   def older?(other_person)
#     age > other_person.age
#   end

#   protected

#   attr_reader :age 
# end

# malory = Person.new(64)
# sterling = Person.new(42)

# malory.older?(sterling)
# sterling.older?(malory)

# malory.age


# class Parent
#   def say_hi
#     p "Hi from parent"
#   end 
# end

# Parent.superclass

# class Child < Parent
#   def say_hi
#     p 'Hi from Child'
#   end

#   def send
#     p "send from child"
#   end

#   def instance_of?
#     p "Im a fake instance"
#   end
# end

# # child = Child.new
# # child.say_hi

# # son = Child.new
# # son.send :say_hi

# # lad = Child.new 
# # lad.send :say_hi

# # c = Child.new
# # p c.instance_of? Child
# # p c.instance_of? Parent

# heir = Child.new
# heir.instance_of? Child





