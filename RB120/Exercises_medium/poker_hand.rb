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

class Deck
  attr_reader :deck

  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    @deck = []
    generate_deck
    shuffle_deck
  end

  def generate_deck
    SUITS.each do |suit|
      RANKS.each do |rank|
        @deck << Card.new(rank, suit)
      end
    end
  end

  def shuffle_deck
    deck.shuffle!
  end

  def draw
    if deck.empty?
      generate_deck
      shuffle_deck
    end
    deck.pop
  end
end

# Include Card and Deck classes from the last two exercises.

class PokerHand
  attr_reader :hand
  def initialize(hand)
    @deck = deck
    @hand = hand

  end

  def deal_hand
    5.times {|card| @hand << @deck.draw}
  end

  def print
    puts @hand
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
    pair?
  end

  #private

  def royal_flush?
    straight_flush? && @hand.max.rank == 'Ace'
  end

  def straight_flush?
    straight? && flush?
  end

  def four_of_a_kind?
    ranks_count.any? { |rank, count| count == 4 }
  end

  def full_house?
    ranks_count.values.sort == [2, 3]
  end

  def flush?
    @hand.map(&:suit).uniq.length == 1
  end

  def straight?
    
  end

  def three_of_a_kind?
    ranks_count.any? { |rank, count| count == 3 }
  end

  def two_pair?
    ranks_count.values.count(2) == 1
  end

  def pair?
    puts hand
  end

  def ranks_count
    @hand.group_by(&:rank).transform_values(&:count)
  end
end

# hand = PokerHand.new(Deck.new)
# hand.deal_hand
# hand.print


# hand = PokerHand.new(Deck.new)
# hand.print
# puts hand.evaluate

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

