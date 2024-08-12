class Dog
  def initialize(name)
    @name = name
  end
end

puppy = Dog.new('Benji')
another_puppy = Dog.new('Benji')

# What will this output? Why?
# this will output false as when we are comparing two objects with the '==' method we are
# Checking if the 2 objects are the same object. Puppy and another_puppy are 2 different 
# objects. the `==` method is comparing the value of the two objects. To get a more meaniful comparison
# we should define the `==` method in the Dog class.

p puppy == another_puppy

# we are comparing different objects
# what do we mean by that? (think back to 101 and variables as pointers)

p puppy
p another_puppy
p puppy.object_id
p another_puppy.object_id



































# Have the students implement the `==` method

# class Dog
#   attr_reader :name

#   def initialize(name)
#     @name = name
#   end

#   def ==(other)
#     name == other.name
#   end
# end

# p puppy == another_puppy # true