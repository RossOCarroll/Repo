class InvoiceEntry
  attr_accessor :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    self.quantity = updated_count if updated_count >= 0
  end
end

chips = InvoiceEntry.new('chips', 3)
chips.update_quantity(2)
puts chips.quantity

#This allows clients of the class to change the quantity directly. This means the protechtions built 
#into the update_quantity method can be circumvented and potentially pose a preblem down the line
