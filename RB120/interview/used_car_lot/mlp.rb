module Taxable
  TAX = 0.05

  def price_with_tax
    price_with_tax = (price * TAX) + price
    "The price of this vehicle is #{price} with tax is #{price_with_tax}"
  end

end

module OffRoad 
  
  def enable_all_wheel
    "Enabling all wheel drive for the #{make}, #{model}"
  end

end

module Staff

  class Employee
    def make_sale
      "Hello, can I help you look for a vehicle"
    end
  end

  class Mechanic
    def oil_change
      "Servicing vehicle"
    end
  end
  
  def self.greet
    "Hello Welcome to Stanly's Used Auto!"
  end
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

  def drive
    "The #{make} goes Vroom Vroom!"
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
  include Staff
  include OffRoad #Ruby will search the last module mixed in first

  def initialize(make, model, price)
    super(make, model, price)
    @wheels = 4

  end

end

car1 = Car.new('Toyota', 'Camry', 2000)
car2 = Car.new('Nissan', 'Altima', 3000)
bike = Motorcycle.new('Harley', 'Cruiser', 1000)
truck = Truck.new('Toyota', 'Tacoma', 2400)

# The method look up path is the path ruby follows when looking up a method

puts Truck.ancestors # We can use the ancestors method to putput the Method look up path of the Truck class