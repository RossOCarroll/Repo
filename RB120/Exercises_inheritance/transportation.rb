module Transportation

  class Vehicle
    include Transportation
  end

  class Truck < Vehicle
    include Transportation
  end

  class Car <Vehicle
    include Transportation
  end

  def to_s  
    
  end

end

p Transportation::Truck.new