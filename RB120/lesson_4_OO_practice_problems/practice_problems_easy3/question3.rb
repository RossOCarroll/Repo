class AngryCat
  def initialize(age, name)
    @age = age
    @name = name
  end

  def age
    puts @age
  end

  def name
    puts @name
  end

  def hiss
    puts "Hisss"
  end
end

cat1 = AngryCat.new(3, "fluffy")
cat2 = AngryCat.new(1, "moses")


cat1.name
cat1.age
cat2.name
cat2.age

