
class Cat
  def meet(other)
    make_friend(other)
  end
  
  def is_friend?(other)
    @friend == other
  end
  
  private
  
  def make_friend(other)
    @friend = other
  end
end

fluffy = Cat.new
kitty = Cat.new

fluffy.meet(kitty)
puts fluffy.is_friend?(kitty)