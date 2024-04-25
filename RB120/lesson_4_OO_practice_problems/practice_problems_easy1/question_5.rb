class Fruit
  attr_reader :name
  def initialize(name)
    name = name
  end
end

class Pizza
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

#The Pizza class would create objects that had a name state instance variable. We see this
#with the @name.

pizza = Pizza.new("cheese")
orange = Fruit.new("orange")
p pizza.instance_variables
p orange.instance_variables