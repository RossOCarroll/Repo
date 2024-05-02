class Participant
  attr_accessor :hand, :name

  def initialize
    @hand = []
    @name = ''
  end

  def total
    total = 0
    aces_count = 0
  
    hand.each do |card|
      value = card_value(card)
      total += value
      aces_count += 1 if card[0] == 'A'
    end
  
    while total > 21 && aces_count > 0
      total -= 10
      aces_count -= 1
    end
  
    total
  end
  
  def card_value(card)
    case card[0]
    when 'J', 'Q', 'K' then 10
    when 'A' then 11
    else card[0].to_i
    end
  end

  def hit(card)
    @hand << card
  end

  def busted?
    total() > 21
  end
end

class Player < Participant
end

class Dealer < Participant
  ROBOTS = ['R2D2', 'Hal', 'Chappie', 'Sonny', 'Number 5']

  def initialize
    super
    @name = ROBOTS.sample
  end
end

class Deck
  attr_reader :cards

  SUITS = ['H', 'D', 'S', 'C']
  FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

  def initialize
    @cards = []
    generate_deck
  end

  def generate_deck
    SUITS.each do |suit|
      FACES.each do |face|
        cards << [face, suit]
      end
    end
  end

  def deal
    @cards.pop
  end

  def shuffle
    @cards.shuffle!
  end
end

class TwentyOne
  attr_reader :deck, :player, :dealer

  def initialize
    @deck = Deck.new
    @player = Player.new
    @dealer = Dealer.new
  end

  def start
    welcome_message
    player_name
    loop do
      system 'clear'
      deal_cards
      show_initial_cards
      player_turn
      if player.busted?
        player_bust_display
        break unless play_again?
        start_new_round
        next
      end
      dealer_turn
      if dealer.busted?
        dealer_bust_display
        break unless play_again?
        start_new_round
        next
      end
      show_result
      break unless play_again?
      start_new_round
    end
    display_goodbye_message
  end

  def player_name
    puts "=> Whats the players name?"
    player.name = gets.chomp
  end

  def deal_cards
    deck.shuffle
    2.times { player.hit(deck.deal) }
    2.times { dealer.hit(deck.deal) }
  end

  def start_new_round
    @player.hand.clear
    @dealer.hand.clear
  end

  def show_initial_cards
    player_card_names = player.hand.map { |card| card_name(card) }
    puts "#{player.name}'s initial cards: #{player_card_names.join(', ')} a total of #{player.total}"
    puts "#{dealer.name}'s initial card: #{card_name(dealer.hand[0])}"
  end

  def show_player_cards
    player_card_names = player.hand.map { |card| card_name(card) }
    puts "#{player.name}'s cards: #{player_card_names.join(', ')} a total of #{player.total}"
  end

  def show_dealer_cards
    dealer_card_names = dealer.hand.map { |card| card_name(card) }
    puts "#{dealer.name} hand: #{dealer_card_names.join(', ')} a total of #{dealer.total}"
  end

  def player_turn
    loop do
      puts "=> Would yo like to Hit or Stay (h or s)"
      answer = gets.chomp.downcase
      if !%w(h s).include?(answer)
        puts "=> Not a valid Choice"
        next
      end
      break if answer == 's'
      player.hit(deck.deal)
      show_player_cards
      break if player.busted?
    end
  end

  def player_bust_display
    puts "=> #{player.name} got #{player.total} Player Bust, Dealer wins"
  end

  def dealer_bust_display
    puts "=> #{dealer.name} got #{dealer.total} Dealer Bust, Player wins"
  end

  def dealer_turn
    
    show_dealer_cards
    while dealer.total < 17
      dealer.hit(deck.deal)
      show_dealer_cards
      break if dealer.busted?
    end
  end

  def show_result
    if dealer.total > player.total
      puts "=> #{dealer.name} total: #{dealer.total}"
      puts "=> #{player.name} total: #{player.total}"
      puts "=> #{dealer.name} wins!"
    elsif dealer.total < player.total
      puts "=> #{dealer.name}  total: #{dealer.total}"
      puts "=> #{player.name} total: #{player.total}"
      puts "=> #{player.name} wins!"
    else
      puts "Its a Tie!"
    end
  end

  def welcome_message
    puts "=> Welcome to Twenty-One!"
  end

  def display_goodbye_message
    puts "=> Thank you for playing Twenty-one! Goodbye."
  end

  def play_again?
    answer = nil
    loop do
      puts "=> Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include?(answer)
      puts "=> Sorry must be y or n"
    end
    answer == 'y'
  end

  def card_name(card)
    face, suit = card
    suit_name = case suit
                when 'H' then "Hearts"
                when 'C' then "Clubs"
                when 'S' then "Spades"
                when 'D' then "Diamonds"
                end

    face_name = case face
                when 'J' then "Jack"
                when 'Q' then "Queen"
                when 'K' then "King"
                when 'A' then "Ace"
                else face
                end

    "#{face_name} of #{suit_name}"
  end
end

TwentyOne.new.start
