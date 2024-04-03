# class GoodDog
#   @@number_of_dogs = 0

#   def initialize
#     @@number_of_dogs += 1
#   end

#   def self.total_number_of_dogs
#     @@number_of_dogs
#   end
# end

# puts GoodDog.total_number_of_dogs

# dog1 = GoodDog.new
# dog2 = GoodDog.new

# puts GoodDog.total_number_of_dogs

# class GoodDog
#   DOG_YEARS = 7

#   attr_accessor :name, :age

#   def initialize(n, a)
#     self.name = n
#     self.age = a * DOG_YEARS
#   end

#   def to_s  
#     "This dog's name is #{name} and it's age is #{age}"
#   end
# end

# sparky = GoodDog.new("Sparky", 4)
# p sparky


# class Foo
#   def to_s 
#     42
#   end
# end

# foo = Foo.new
# puts foo 
# puts "foo is #{foo}"

# class Bar   
#   attr_reader :xyz
#   def initialize
#     @xyz = { a: 1, b: 2 }
#   end

#   def to_s  
#     'I am a Bar object!'
#   end
# end

# bar = Bar.new  
# puts bar  
# puts bar.xyz 


class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    self.name = n 
    self.height = h 
    self.weight = w 
  end

  def change_info(n, h, w)
    self.name = n 
    self.height = h 
    self.weight = w 
  end

  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall."
  end

  def what_is_self 
    self 
  end 

  puts self
end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
#p sparky.what_is_self

