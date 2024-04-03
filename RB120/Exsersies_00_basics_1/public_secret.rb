class Person
  attr_writer :secret

  def compare_secret(secret2)
    @secret == secret2
  end

  protected

  attr_reader :secret
end

person1 = Person.new
p person1.secret = 'Shh.. this is a secret!'

person2 = Person.new
p person2.secret = 'Shh.. this is a different secret!'

puts person1.compare_secret(person2)