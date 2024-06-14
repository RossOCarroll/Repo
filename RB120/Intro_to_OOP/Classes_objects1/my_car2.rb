require 'date'

module Towable
  def can_tow?(pounds)
    pounds < 2000
  end
end

class Vehicle
  attr_accessor :speed
  attr_reader :year, :color, :model

  @@number_of_vehicles = 0

  def initialize(y, c, m)
    @year = y
    @color = c
    @model = m
    @speed = 0
    @@number_of_vehicles += 1
  end

  def speed_up(accelerate)
    @speed += accelerate
  end

  def brake(decelerate)
    @speed -= decelerate
  end

  def self.display_vehicles
    puts "You have #{@@number_of_vehicles} vehilcles"
  end

  def shut_off
    @speed = 0
  end

  def spray_paint(c)
    self.color = c
  end

  def to_s
    "#{self.year} , #{self.color} and #{self.model}"
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end

  def age
    puts "The ahe of your #{self.model} is #{age_of_vehicle}"
  end 

  private

  def age_of_vehicle
    Date.today.year - self.year.to_i 
  end
end


class MyCar < Vehicle
  NUMBER_OF_DOORS = 4

  def initialize(y, c, m)
    super(y, c, m)
  end

end

class MyTruck < Vehicle
  include Towable
  NUMBER_OF_DOORS = 2

  def initialize(y, c, m)
    super(y, c, m)

  end

end

land_cruiser = MyCar.new('1996', 'white', 'Lancruiser')
MyCar.gas_mileage(13, 351)
puts land_cruiser
land_cruiser.speed_up(60)
land_cruiser.brake(30)
puts land_cruiser.speed
tacoma = MyTruck.new('2003', 'green', 'Tacoma')
puts tacoma
tacoma.speed_up(50)
tacoma.brake(20)
puts tacoma.speed
puts MyCar::NUMBER_OF_DOORS
Vehicle.display_vehicles
puts tacoma.can_tow?(1500)
tacoma.age

