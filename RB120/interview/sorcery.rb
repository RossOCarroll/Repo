module TimeStop 
  def time_stop
    puts "Stopping Time"
  end
end

module Mirage 
  def create_mirage
    puts "Mirage"
  end
end


class SorcerySchool

end

class Student

  def initialize(artifact, robe_color)
    @magical_energy = calc_magical_energy
    @unique_spell = give_unique_spell
    @artifact = artifact
    @robe_color = robe_color
  end

  def give_unique_spell
    spells = ['fireball', 'earthquake', 'wall of water', 'lighting bolt']
    if spells.empty?
      'TBD'
    else
      spells.pop
    end 
  end

  def to_s
    puts "======================"
    puts "School of Sorcery: #{self.class}"
    puts "Magical Energy: #{self.magical_energy}"
    puts "Unique Spell: #{self.unique_spell}"
    puts "Artifact: #{self.artifact}"
    puts "Robe Color: #{self.robe_color}"
    puts "======================"
  end

  private

  def calc_magical_energy
    if self.class == Enchanter
      rand(150..250)
    elsif self.class == Necromancer
      rand(75..175)
    else
      rand(100..200)
    end
  end

  attr_accessor :magical_energy, :unique_spell, :artifact, :robe_color

end 

class Illusionist < Student
  include Mirage

  def initialize
    super(@artifact = "cystal ball", @robe_color = "purple")
  end
end

class Enchanter < Student
  include Mirage 

  def initialize
    super(@artifact = "cystal ball", @robe_color = "gold")
  end
end

class Necromancer < Student
  include TimeStop 

  def create_zombie
    "Zombie Created"
  end

  def initialize
    super(@artifact = "wooden staff", @robe_color = "black")
  end
end

class Conjurer < Student
  include TimeStop 
  include Mirage 

  def initialize
    super(@artifact = "silver wand", @robe_color = "green")
  end
end


barry = Illusionist.new
mary = Enchanter.new
larry = Necromancer.new
harry = Conjurer.new

puts barry
puts mary
puts larry
puts harry



