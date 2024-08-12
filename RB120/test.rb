module TruckBed

  def truck_bed
    "I can carry many things"
  end

end

module Taxable
  TAX = 0.05

  def price_with_tax
    price_with_tax = (price * TAX) + price
    "This #{self} is #{price_with_tax} with tax."
    
  end
end

module Employee
  class SalesPerson
    
  end

  class Mechanic
    
  end

  def self.greet 
    "Hello, Welcome"
  end
end


class UsedCarLot
  attr_reader :inventory

  def initialize
    @inventory = []
  end

  def add_vehicle(vehicle)
    @inventory << vehicle
  end
  
  def self.welcome
    "Hello Welcome to our lot."
  end
end



class Vehicle
  include Taxable
  attr_reader :make, :model
  @@number_of_cars = 0
  
  
  def initialize(make, model, price)
    @make = make 
    @model = model 
    @price = price
    @@number_of_cars += 1
  end

  def to_s
    "#{make}, #{model}"
  end

  def get_price
    price
  end

  def self.how_many_vehicles
    @@number_of_cars
  end

  def drive
    "#{model} goes vrooom!"
  end

  def >(other_vehicle)
    price > other_vehicle.price
  end

  protected

  attr_reader :price
end

class Car < Vehicle
  attr_reader :wheels, :year

  def initialize(make, model, price, year)
    super(make, model, price) # super key word sends the arguments up the inheitance chain to a super class
    @year = year
    @wheels = 4
  end
end

class Truck < Vehicle
  include TruckBed

  def drive # Method overriding, providing specific implmentation for out Truck#drive method
    "#{model} is like a rock"
  end
 
end

camary = Car.new('Toyota', 'Camary', 2000, 2012)
tacoma = Truck.new('Toyota', 'Tacoma', 3000)

vehicles = [camary, tacoma]

#vehicles.each {|vehicle| puts vehicle.drive }

stanly_lot = UsedCarLot.new
sarah = Employee::SalesPerson.new
ray = Employee::Mechanic.new

puts camary.year









