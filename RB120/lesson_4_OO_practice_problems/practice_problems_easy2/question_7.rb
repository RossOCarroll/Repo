class Cat 
  @@cat_count = 0

  def initialize(type)
    @type = type
    @age = 0
    @@cat_count += 1
  end

  def self.cats_count
    @@cat_count
  end
end 

#Class variables capture information related specifically to instances of classes.

cat1 = Cat.new('simease')
cat2 = Cat.new('street')

puts Cat.cats_count
