
class Meal
  attr_accessor :burger, :side, :drink

  def initialize
    @burger = Burger.new
    @side = Side.new
    @drink = Drink.new
  end

  def choose_burger
    @burger.choose
  end

  def choose_side
    @side.choose
  end

  def choose_drink
    @drink.choose
  end

  def total_cost

  end
end

class Burger < Meal
  attr_accessor :option

  def initialize
    @option = {}
  end

  
  def choose
    puts "=> Please choose your burger: 1. Cheesburger 2. Plain Burger 3. Vegiburger"
    burger_order = gets.chomp.to_i
    case burger_order
    when 1 then @option['cheeseburger'] = 5.00
    when 2 then @option['plain burger'] = 4.50
    when 3 then @option['vegi burger'] = 4.00
    else puts "Invalid choice"
    end
    puts @option
  end

end

class Side 
  attr_accessor :option

  def initialize
    @option = {}
  end


  def choose
    puts "=> Please choose your side: 1. Fries 2. Onion Rings 3. Coleslaw "
    side_order = gets.chomp.to_i
    case side_order
    when 1 then @option['Fries'] = 3.00
    when 2 then @option['Onion Rings'] = 2.50
    when 3 then @option['Coleslaw'] = 1.50
    else puts "Invalid choice"
    end
    puts @option
  end

end

class Drink
  attr_accessor :option

  def initialize
    @option = {}
  end

  def choose
    puts "=> Please choose your drink: 1. Soda 2. Juice 3. Water "
    drink_order = gets.chomp.to_i
    case drink_order
    when 1 then @option['Soda'] = 2.00
    when 2 then @option['Juice'] = 1.50
    when 3 then @option['vegi burger'] = 0.00
    else puts "Invalid choice"
    end
    puts @option
  end
end



class Customer
  ORDER_NUMBERS = (1..500).to_a
  @@customers = 0

  def initialize
    @name = ''
    @order_number = ORDER_NUMBERS.sample
    @order = Meal.new
    @@customers += 1
  end

  def place_order
    puts "=> Please enter your name:"
    @name = gets.chomp
    puts "=> Welcome to the burger joint #{@name}!"
    @order.choose_burger
    @order.choose_side
    @order.choose_drink
    complete_order = compile_order
    reciept(complete_order)
  end

  def reciept(order)
    puts "Reciept-------Order Number#{@order_number}"
    order.each do |key, value|
      puts "#{key}       #{value}"       
    end
    puts "Total         #{order.values.sum}" 
    puts "Thank you for joining us at The Joint!"
  end

  def compile_order
    burger = @order.burger.option
    side = @order.side.option
    drink = @order.drink.option
    compiled_order = burger.merge(side).merge(drink)
    compiled_order
  end

end

Customer.new.place_order