class Person
  attr_accessor :name
  attr_writer :phone_number
end

person1 = Person.new
person1.name = "Jessica"
person1.phone_number = "01234567"
puts person1.name