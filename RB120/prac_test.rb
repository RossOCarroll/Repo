# Object orintated programing is a programing paragdigm to help engeeneers solve the prolems that arrise when we
# have big complex code.

module Drivable
  
  def drive
    "The #{@make},#{@model} goes Vrooom!"
  end
  
end

module TruckBed
  def truck_bed
    "I can carry so many things"
  end
end

module Employee
  class SalesPerson
    
  end

  class Mechanic
    
  end

  def self.greet
    "Hello welcome to our lot"
  end
end

module Taxable
  Tax = 0.5


end

class UsedCarLot
  attr_accessor :inventory
  
  def initialize
    @inventory = []
  end

  def <<(vehicle)
    self.inventory << vehicle
  end

  def self.greeting
    "Hello, How may I help you?"
  end
end



class Vehicle
  attr_accessor :make, :model

  @@number_of_vehicles = 0

  def initialize(make, model, price)
    @make = make # Encapsulating state 
    @model = model
    @price = price
    @@number_of_vehicles += 1
  end

  def self.number_of_vehicles
    @@number_of_vehicles
  end

  def to_s
    "#{make}, #{model}"
  end

  def get_info
    "#{make}, #{model} is #{self.price}"
  end

  def change_info(new_make, new_model)
    self.make = new_make
    self.model = new_model
  end

  def change_price(new_price)
    self.price = new_price
  end

  def is_more_expensive(other_vehicle)
    price > other_vehicle.price
  end

  def ==(other_vehicle)
    make == other_vehicle.make
  end

  protected

  attr_accessor :price


end

class Car < Vehicle
  include Drivable
  

end

class Truck < Vehicle 
  include TruckBed
  include Drivable

  def initialize(make, model, price, wheels)
    super(make, model, price)
    @wheels = wheels
  end

  def drive
     "The #{make}, #{model} goes Grrrrr!"
  end

end

class Bicycle
  attr_reader :make
  
  def initialize(make)
    @make = make
  end

  def drive
    "The #{make} goes ring ring!"
  end

end

def driving(vehicle)
  vehicle.drive
end


camary = Car.new('Toyota', 'Camary', 2000)
tacoma = Truck.new('Toyota', 'Tacoma', 3000, 4)
bike = Bicycle.new('Giant')

puts driving(camary)
puts driving(tacoma)
puts driving(bike)

stanlys_lot = UsedCarLot.new
stanlys_lot << camary
stanlys_lot << tacoma

camary.change_price(2500)

sarah = Employee::SalesPerson.new
mike = Employee::Mechanic.new





