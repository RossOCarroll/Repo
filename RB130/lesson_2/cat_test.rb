require 'minitest/autorun'

require_relative 'cat'

class CatTest < Minitest::Test
  def setup
    @kitty = Cat.new('Kitty')
  end

  # def test_is_cat; end

  def test_name
    refute_equal('Kitty', @kitty.name)
  end

  # def test_miaow
  #   assert_match(@kitty.miaow, / is miaowing\./)
  # end

  # def test_raises_error
  #   assert(Cat.new == ArgumentError)
  # end
  # def test_is_not_purrier
  #   patch = Cat.new('Patch', 5)
  #   milo = Cat.new('Milo', 3)
  
  #   refute(patch.purr_factor > milo.purr_factor)
  # end
end