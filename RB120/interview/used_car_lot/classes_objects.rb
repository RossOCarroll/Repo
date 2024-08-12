class UsedCarLot
  attr_reader :make, :model

  def initialize(make, model)
    @make = make #instance variable that encapsulate state
    @model = model 
  end

  def get_info # behavior that is defined in the class
    "#{make}, #{model}"
  end

end

car = UsedCarLot.new('toyta', 'camery')
puts car.get_info

