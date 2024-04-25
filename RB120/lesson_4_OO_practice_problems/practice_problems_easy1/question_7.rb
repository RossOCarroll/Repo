class Cat 
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age = 0
  end

  def make_older
    self.age += 1
  end
end

#self here is referencing the instance (object) that called the method or the calling object.
