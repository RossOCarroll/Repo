module Taxable
  TAX = 0.05

end

class UsedCarLot
  include Taxable

  @@number_of_vehicles = 0  
  attr_reader :make, :model


  def initialize(make, model, price)
    @make = make  
    @model = model  
    @price = price
    @@number_of_vehicles += 1 
  end

  def get_info  
    "#{make}, #{model}"
  end

  def price_with_tax
    price_with_tax = (price * TAX) + price
    "The price of this vehicle is #{price} with tax is #{price_with_tax}"
  end

  def self.number_of_vehicles  
    @@number_of_vehicles
  end

  def change_price(new_price)
    @price = new_price
  end

  def is_vehicle_more_expensive(other_vehicle)
    if self.price > other_vehicle.price
      "Yes this #{make}, #{model} is more expensive"
    else 
      "No this #{make}, #{model} is less expensive"
    end
  end

  protected 

  attr_reader :price

  private

  attr_writer :price
end

class Car < UsedCarLot

  def initialize(make, model, price)
    super(make, model, price)
    @wheels = 4

  end

end

class Motorcycle < UsedCarLot

  def initialize(make, model, price)
    super(make, model, price)
    @wheels = 2
  end
end

class Truck < UsedCarLot

end

car1 = Car.new('Toyota', 'Camry', 2000)
car2 = Car.new('Nissan', 'Altima', 3000)
bike = Motorcycle.new('Harley', 'Cruiser', 1000)
truck = Truck.new('Toyota', 'Tacoma', 2400)

puts car1.is_vehicle_more_expensive(bike)
