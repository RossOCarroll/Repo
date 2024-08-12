class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student
  def initialize(name, year)
    super
  end
end

class ProspectiveStudent < Student
  def initialize
    super()
  end

end

bob = Graduate.new('Bob', 2023, true)
p bob
sarah = Undergraduate.new('Sarah', 2025)
p sarah

max = ProspectiveStudent.new('Max', 2026)


