class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
    def start_engine
      'Ready to go!'
    end
  end
end

class Truck < Vehicle

end


truck1 = Truck.new(1994)
puts truck1.year

