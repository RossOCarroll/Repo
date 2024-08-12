class Shelter

  def initialize
    @owners = {}
    @unadopted_pets = []
  end

  def adopt(owner, pet)
    owner.add_pet(pet)
    @owners[owner.name] ||= owner
  end

  def print_adoptions
    @owners.each_pair do |name, owner|
      puts "#{name} has adopted the following pets:"
      owner.print_pets
    end
  end

  def add_unadopted_pet(pet)
    @unadopted_pets << pet
  end

  def unadopted_pets_count
    puts "The shelter has #{@unadopted_pets.size} unadopted pets."
  end

  def print_unadopted_pets
    puts "The Animal shelter has the following unadopted pets:"
    @unadopted_pets.each do |pet|
      puts "a #{pet.type} named #{pet.name}"
    end
  end

end


class Owner
  attr_reader :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end

  def add_pet(pet)
    @pets << pet
  end

  def print_pets
    puts pets
  end

  def number_of_pets
    pets.size
  end


end

class Pet
  attr_reader :type, :name

  def initialize(type, name)
    @type = type
    @name = name
  end

  def to_s
    "a #{type} named #{name}"
  end

end



butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)
#shelter.print_adoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."

asta = Pet.new('dog', 'Asta')
laddie = Pet.new('dog', 'Laddie')
fluffy = Pet.new('cat', 'fluffy')
kat = Pet.new('cat', 'Kat')
ben = Pet.new('cat', 'Ben')
chatterbox = Pet.new('parakeet', 'Chatterbox')
bluebell = Pet.new('parakeet', 'BlueBell')

shelter.add_unadopted_pet(asta)
shelter.add_unadopted_pet(laddie)
shelter.add_unadopted_pet(fluffy)
shelter.add_unadopted_pet(kat)
shelter.add_unadopted_pet(ben)
shelter.add_unadopted_pet(chatterbox)
shelter.add_unadopted_pet(bluebell)

shelter.print_unadopted_pets
shelter.unadopted_pets_count


