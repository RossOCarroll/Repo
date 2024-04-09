# class Person
#   def initialize
#     @heroes = ['Superman', 'Spiderman', 'Batman']
#     @cash = {'ones' => 12, 'fives' => 2, 'tens' => 0, 'twenties' => 2, 'hundreds' => 0}
#   end

#   def cash_on_hand
#     @cash.values.sum
#   end

#   def heroes
#     @heroes.join(', ')
#   end

# end

# joe = Person.new
# puts joe.cash_on_hand
# puts joe.heroes


# class Person
#   attr_accessor :name, :pet

#   def initialize(name)
#     @name =  name
#   end

# end

# bob = Person.new("Robert")
# bud = Bulldog.new

# bob.pet = bud


module Swimmable
  def swim
    "swimming!"
  end
end

class Dog
  include Swimmable
  # ... rest of class omitted
end

class Fish
  include Swimmable
  # ... rest of class omitted
end


puts Fish.ancestors