class Inventory
  def initialize
    @stock = Hash.new(0)
  end

  def [](book)
    stock[book]
  end

  def []=(book, quantity)
    stock[book] = quantity
  end

  def all_titles
    puts stock.keys.map(&:title)
  end

  private

  attr_reader :stock
end

class Book
  attr_reader :title

  def initialize(title)
    @title = title
  end
end

white_fang = Book.new('White Fang')
piranesi = Book.new('Piranesi')

store = Inventory.new
p store[white_fang] # 0
store.all_titles # no output

store[piranesi] = 3
store[piranesi] -= 1
p store[piranesi] # 2
store.all_titles # Piranesi
