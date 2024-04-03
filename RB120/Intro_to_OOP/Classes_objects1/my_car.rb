module Driveable
  def starts?
    "This vehicle can drive"
  end

end

class Vehicle

  @@number_of_vehicles = 0

  attr_accessor :year, :color, :model, :speed, :brake, :on_or_off

  def initialize(y, c, m)
    @year = y
    @color = c  
    @model = m
    @speed = 0
    @on_or_off = 'off'
    @@number_of_vehicles += 1

  end


  def self.number_of_vehicles
    puts " This program has created #{@@number_of_vehicles}"
  end
  

  def spray_paint(color)
    @color = color
    puts "The color of your car is #{@color}"
  end

  def speed_up(speed)
    @speed += speed
    puts "Speed is currently #{@speed}"
  end

  def current_speed
    puts "You are now going #{@current_speed} mph."
  end

  def brake(speed)
    @speed -= speed
    puts "Speed is currently #{@speed}"
  end

  def on_or_off(state)
    @on_or_off = state
  end

  def shut_down
    @current_speed = 0
    puts "Let's park this bad boy!"
  end

  def info 
    "The #{year}, #{color}, #{model} is #{@on_or_off} and the break is #{@break} also the speed is #{@speed}"
  end

  def self.miles_per_gallon(gallons, miles)
    puts "#{miles/gallons} is your miles per gallon"
  end

  def age
    "Your #{self.model} is #{years_old} years old"
  end

  private

  def years_old
    Time.now.year - self.year
  end
end


class MyCar < Vehicle
  include Driveable

  NUMBER_OF_DOORS = 4

  def to_s
    "Your car is a #{year} #{color} #{model}"
  end
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2

  def to_s
    "Your truck is a #{year} #{color} #{model}"
  end
end


tacoma = MyCar.new(2003, 'white', 'Tacoma')
my_truck = MyTruck.new('1996', 'green', 'Land Cruiser')

puts tacoma.age






