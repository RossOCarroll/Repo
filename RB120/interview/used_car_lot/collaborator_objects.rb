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
  attr_accessor :inventory

  def initialize
    @inventory = []
  end

  def <<(vehicle)
    self.inventory << vehicle
  end

  def to_s
    inventory.each do |vehicle|
      puts "This #{vehicle.make}, #{vehicle.model} is #{vehicle.price_with_tax} with tax."
    end
  end

end


class Vehicle
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

  def >(other_vehicle) # Customizing out > fake opertor method to compare the state of two objects
    self.price > other_vehicle.price
  end

  protected 

  attr_reader :price

  private

  attr_writer :price
end

class Car < Vehicle

  def initialize(make, model, price)
    super(make, model, price)
    @wheels = 4

  end

end

class Motorcycle < Vehicle

  def initialize(make, model, price) 
    super(make, model, price)
    @wheels = 2
  end
end

class Truck < Vehicle
  include OffRoad 

  def initialize(make, model, price)
    super(make, model, price)
    @wheels = 4
  end

  def self.like_a_rock # self is used to define a class method
   puts  "Like a Rock!"
  end

  def cab_size
    "This #{self.model} has two doors" #self here refers to the getter method in the super class
  end

end


stanlys_lot = UsedCarLot.new

car1 = Car.new('Toyota', 'Camry', 2000)
car2 = Car.new('Nissan', 'Altima', 3000)
bike = Motorcycle.new('Harley', 'Cruiser', 1000)
tacoma = Truck.new('Toyota', 'Tacoma', 2400)

stanlys_lot << car1
stanlys_lot << car2
stanlys_lot << bike
stanlys_lot << tacoma

#stanlys_lot.inventory.each {|car| puts car.price_with_tax }]
puts stanlys_lot 


