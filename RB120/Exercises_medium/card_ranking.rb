class Card
  include Comparable
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other_card)
    return nil unless other_card.is_a?(Card)

    self_rank = rank_conversion(rank)         
    other_rank = rank_conversion(other_card.rank)
  
    self_rank <=> other_rank
  end

  def rank_conversion(rank)
    conv_rank = case rank 
                when 'Ace' then 14
                when 'King' then 13
                when 'Queen' then 12
                when 'Jack' then 11
                else rank.to_i
                end
  
  conv_rank

  end

  def to_s
    "The #{rank} of #{suit}"
  end
end



cards = [Card.new(2, 'Hearts'),
  Card.new(10, 'Diamonds'),
  Card.new('Ace', 'Clubs')]
puts cards.min == Card.new(2, 'Hearts') #should be true
puts cards.max == Card.new('Ace', 'Clubs')

cards = [Card.new(5, 'Hearts')]
puts cards.min == Card.new(5, 'Hearts')
puts cards.max == Card.new(5, 'Hearts')

cards = [Card.new(4, 'Hearts'),
  Card.new(4, 'Diamonds'),
  Card.new(10, 'Clubs')]
puts cards.min.rank == 4
puts cards.max == Card.new(10, 'Clubs')

cards = [Card.new(7, 'Diamonds'),
  Card.new('Jack', 'Diamonds'),
  Card.new('Jack', 'Spades')]
puts cards.min == Card.new(7, 'Diamonds') 
puts cards.max.rank == 'Jack' 

cards = [Card.new(8, 'Diamonds'),
  Card.new(8, 'Clubs'),
  Card.new(8, 'Spades')]
puts cards.min.rank == 8
puts cards.max.rank == 8