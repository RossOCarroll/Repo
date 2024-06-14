class Person
  attr_accessor :name, :first_name, :last_name

  def initialize(name)
    parse_full_name(name)
  end

  def name
    "#{@first_name} #{@last_name}"
  end

  def name=(new_name)
    parse_full_name(new_name)
  end

  def compare(other_name)
    self.name == other_name.name
  end

  def to_s
    self.name
  end

  private

  def parse_full_name(new_name)
    parts = new_name.split
    self.first_name = parts.first
    self.last_name = parts.last
  end
end

bob = Person.new("Robert Smith")
puts "The person's name is: #{bob}"

