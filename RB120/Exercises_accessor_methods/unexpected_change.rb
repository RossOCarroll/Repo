class Person
  attr_accessor :name

  def split_name
    first_name = @name.split.first
    last_name = @name.split.last
    [first_name, last_name]
  end

  def name
    "#{split_name[0]} #{split_name[1]}"
  end



end

person1 = Person.new
person1.name = "John Doe"
puts person1.name

