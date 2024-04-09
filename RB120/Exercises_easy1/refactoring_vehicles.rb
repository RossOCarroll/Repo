class Vehicle
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def to_s
    "#{make} #{model}"
  end

end


class Car < Vehicle

  def wheels
    4
  end
end

class Motorcycle < Vehicle

  def wheels
    2
  end
end

class Truck < Vehicle
  attr_reader :payload

  def initialize(make, model, payload)
    super(make, model)
    @payload = payload
  end

  def wheels
    6
  end

  def to_s
    "#{make} #{model} and payload: #{payload}"
  end
end

bike = Motorcycle.new('Yamaha', 'Ninja')

truck = Truck.new('Toyota', 'Tacoma', '5000')

car = Car.new('Nissan', 'Skyline')

puts truck
puts car
puts bike