require 'minitest/autorun'

require_relative 'car'

describe 'Car#wheels' do
  it 'has four wheels' do
    car = Car.new
    _(car.wheels).must_equal 4
  end
end