module Taxable
  TAX = 0.05

end

class UsedCarLot
  include Taxable

  @@number_of_vehicles = 0  
  attr_reader :make, :model
  attr_accessor :price

  def initialize(make, model, price)
    @make = make  
    @model = model  
    @price = price
    @@number_of_vehicles += 1 
  end

  def get_info  
    "#{make}, #{model}"
  end

  def get_price
    price_with_tax = (price * TAX) + price
    "The price of this vehicle is #{price} with tax is #{price_with_tax}"
  end

  def self.number_of_vehicles  
    @@number_of_vehicles
  end
end

class Car < UsedCarLot

end

class Truck < UsedCarLot

end

car1 = Car.new('Toyota', 'Camry', 2000)
car2 = Car.new('Nissan', 'Altima', 3000)
car2.price = 2500
puts car2.price