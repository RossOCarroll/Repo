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
  attr_accessor :money, :bet

  def initialize
    super
    @money = 20
    @hand = []
    @bet = 0
  end

  def get_name
    loop do
      puts "=> Whats the players name?"
      @name = gets.chomp
      break if !@name.empty?
      puts "Sorry must enter a name"
    end
  end

  def take_turn(deck)
    loop do
      puts "=> Would you like to Hit or Stay (h or s)"
      answer = gets.chomp.downcase
      if !%w(h s).include?(answer)
        puts "=> Not a valid Choice"
        next
      end
      break if answer == 's'
      hit(deck.deal)
      show_player_cards
      break if busted?
    end
  end

  def show_player_cards
    player_card_names = hand.map { |card| Deck.card_name(card) }
    puts "#{name}'s cards: #{player_card_names.join(', ')} a total of #{total}"
    Deck.cards_layout(hand)
  end

  def place_bet
    self.bet = 0
    loop do 
      puts "You have $#{money}. What would you like to bet?"
      player_bets = gets.chomp.to_i
      if player_bets > money
        puts "I'm sorry, you don't have enough money to place that bet."
      elsif player_bets <= 0
        puts "Please enter a valid bet amount."
      else
        self.money -= self.bet
        self.bet = player_bets
        break
      end
    end
  end

  def broke?
    money <= 0
  end

end

class Dealer < Participant
  ROBOTS = ['R2D2', 'Hal', 'Chappie', 'Sonny', 'Number 5']

  def initialize
    super
    @name = ROBOTS.sample
  end

  def show_dealer_cards
    dealer_card_names = hand.map { |card| Deck.card_name(card) }
    puts "#{name} hand: #{dealer_card_names.join(', ')} a total of #{total}"
    Deck.cards_layout(hand)
  end

  def dealer_turn(deck)
    
    show_dealer_cards
    while total < 17
      hit(deck.deal)
      show_dealer_cards
      break if busted?
    end
  end

  def self.dealer_initial_card(card)
    puts "+-----+"
    puts "|#{card[1]}    |"
    if card[0] == '10'
      puts "| #{card[0]}  |"
    else
      puts "|  #{card[0]}  |"
    end
    puts "|    #{card[1]}|"
    puts "+-----+"
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

  def reshuffle_deck
    @cards.clear
    generate_deck
  end

  def deal
    @cards.pop
  end

  def shuffle
    @cards.shuffle!
  end

  def self.cards_layout(cards)
    horizontal_separator = "+-----+" * cards.size
    suits = cards.map { |_, suit| "|#{suit}    |" }.join('')
    faces = cards.map do |face, _|
      if face == '10'
        "|  #{face} |"
      else
        "|  #{face}  |"
      end
    end.join('')
    suit_symbols = cards.map { |_, suit| "|    #{suit}|" }.join('')
    
    puts horizontal_separator
    puts suits
    puts faces
    puts suit_symbols
    puts horizontal_separator
  end

  def self.card_name(card)
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

class TwentyOne
  attr_reader :deck, :player, :dealer

  def initialize
    @deck = Deck.new
    @player = Player.new
    @dealer = Dealer.new
  end

  def start
    welcome_message
    player.get_name
    loop do
      system 'clear'
      player.place_bet
      deal_cards
      show_initial_cards
      player.take_turn(deck)
      if player.busted?
        player_bust_display
        break unless play_again?
        start_new_round
        next
      end
      dealer.dealer_turn(deck)
      if dealer.busted?
        dealer_bust_display
        break unless play_again?
        start_new_round
        next
      end
      show_result
      if player.broke?
        puts "You're Broke you must leave the game!"
        break
      end
      break unless play_again?
      start_new_round
    end
    display_goodbye_message
  end

  def deal_cards
    if deck.cards.size < 26
      puts "Reshuffling Cards..."
      deck.reshuffle_deck
    end
    deck.shuffle
    2.times { player.hit(deck.deal) }
    2.times { dealer.hit(deck.deal) }
  end

  def start_new_round
    @player.hand.clear
    @dealer.hand.clear
  end

  def show_initial_cards
    player_card_names = player.hand.map { |card| Deck.card_name(card) }
    puts "#{player.name}'s initial cards: #{player_card_names.join(', ')} a total of #{player.total}"
    Deck.cards_layout(player.hand)
    puts "#{dealer.name}'s initial card: #{Deck.card_name(dealer.hand[0])}"
    Dealer.dealer_initial_card(dealer.hand[0])
  end

  def player_bust_display
    puts "=> #{player.name} got #{player.total} Player Bust, Dealer wins"
    player.money -= player.bet
    puts "=> You've lost your $#{player.bet} bet, you now have $#{player.money}"
  end

  def dealer_bust_display
    puts "=> #{dealer.name} got #{dealer.total} Dealer Bust, Player wins"
    player.money += (player.bet * 2)
    puts "=> You've won $#{(player.bet * 2)} you now have $#{player.money}"
  end

  def show_result
    if dealer.total > player.total
      puts "=> #{dealer.name} total: #{dealer.total}"
      puts "=> #{player.name} total: #{player.total}"
      puts "=> #{dealer.name} wins!"
      player.money -= player.bet
      puts "=> You've lost your $#{player.bet} bet, you now have $#{player.money}"
    elsif dealer.total < player.total
      puts "=> #{dealer.name}  total: #{dealer.total}"
      puts "=> #{player.name} total: #{player.total}"
      puts "=> #{player.name} wins!"
      player.money += (player.bet * 2)
      puts "=> You've won $#{(player.bet * 2)} you now have $#{player.money}"
    else
      player.money += player.bet
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
end

TwentyOne.new.start
