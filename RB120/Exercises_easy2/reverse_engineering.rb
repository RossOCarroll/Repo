class Transform

  def initialize(input)
    @input = input
  end

  def uppercase
    @input.upcase 
  end 

  def self.lowercase(string)
    string.downcase
  end

end





my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')