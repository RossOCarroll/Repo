module Taxable
  TAX = 0.05

end

class UsedCarLot
  include Taxable

  @@number_of_vehicles = 0  # Class variable to track number of vehicles
  attr_reader :make, :model, :price

  def initialize(make, model, price)
    @make = make  # Instance variable to store the make of the car
    @model = model  # Instance variable to store the model of the car
    @price = price
    @@number_of_vehicles += 1  # Increment the class variable
  end

  def get_info  # Instance method to get car information
    "#{make}, #{model}"
  end

  def get_price
    price_with_tax = (price * TAX) + price
    "The price of this vehicle is #{price} with tax is #{price_with_tax}"
  end

  def self.number_of_vehicles  # Class method to access class variable
    @@number_of_vehicles
  end
end

class Car < UsedCarLot
  @@number_of_vehicles = 3 # reassging the class variable to start

end

class Truck < UsedCarLot

end

car1 = Car.new('Toyota', 'Camry', 2000)
car2 = Car.new('Nissan', 'Altima', 3000)
puts car1.get_info  # Should print: Toyota, Camry
puts UsedCarLot.number_of_vehicles  
puts car1.get_price
puts Truck::TAX #How can i demonstrate constant scope?
