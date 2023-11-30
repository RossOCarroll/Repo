require 'pry'

DECK =
  [
    ['H', 2],
    ['H', 3],
    ['H', 4],
    ['H', 5],
    ['H', 6],
    ['H', 7],
    ['H', 8],
    ['H', 9],
    ['H', 10],
    ['H', 'Jack'],
    ['H', 'Queen'],
    ['H', 'King'],
    ['H', 'Ace'],

    ['D', 2],
    ['D', 3],
    ['D', 4],
    ['D', 5],
    ['D', 6],
    ['D', 7],
    ['D', 8],
    ['D', 9],
    ['D', 10],
    ['D', 'Jack'],
    ['D', 'Queen'],
    ['D', 'King'],
    ['D', 'Ace'],

    ['S', 2],
    ['S', 3],
    ['S', 4],
    ['S', 5],
    ['S', 6],
    ['S', 7],
    ['S', 8],
    ['S', 9],
    ['S', 10],
    ['S', 'Jack'],
    ['S', 'Queen'],
    ['S', 'King'],
    ['S', 'Ace'],

    ['C', 2],
    ['C', 3],
    ['C', 4],
    ['C', 5],
    ['C', 6],
    ['C', 7],
    ['C', 8],
    ['C', 9],
    ['C', 10],
    ['C', 'Jack'],
    ['C', 'Queen'],
    ['C', 'King'],
    ['C', 'Ace']
  ]

def prompt(msg)
  puts "=> #{msg}"
end

players_cards = []
dealers_cards = []

def display_cards(player, dealer)
  puts prompt("Dealer is showing #{dealer[1][1]}")
  puts prompt("You have an #{player[0][1]} and a #{player[1][1]}")
end

def tally_hand(cards)
  total = 0
  num_aces = 0

  cards.each do |card|
    case card[1]
    when 'Jack', 'Queen', 'King' then total += 10
    when 'Ace'
      total += 11
      num_aces += 1
    else
      total += card[1]
    end
  end

  num_aces.times do
    break if total <= 21
    total -= 10
  end
  total
end

def twenty_one?(player, dealer)
  if dealer == 21
    'Dealer'
  elsif player == 21
    'Player'
  elsif player == 21 && dealer == 21
    puts 'Dealer push'
  end
end

def player_hits(card)
  case card[1]
  when 'Jack', 'Queen', 'King' then card[1] = 10
  when 'Ace'
    card[1] = $player_tally + 11 <= 21 ? 11 : 1
  end
  card[1]
end

def dealer_hits(card)
  case card[1]
  when 'Jack', 'Queen', 'King' then card[1] = 10
  when 'Ace'
    card[1] = $player_tally + 11 <= 21 ? 11 : 1
  end
  card[1]
end

def bust?(tally)
  tally > 21
end

def who_wins?(player, dealer)
  if player > dealer
    prompt("Player has #{player}, Dealer has #{dealer} player wins!")
  elsif player < dealer
    prompt("Dealer has #{dealer}, Player has #{player} dealer wins!")
  elsif player == dealer
    prompt("Dealer total: #{dealer}")
    prompt("Dealer push")
  end
end

loop do
  system 'clear'

  players_cards = [DECK.sample, DECK.sample]
  dealers_cards = [DECK.sample, DECK.sample]

  display_cards(players_cards, dealers_cards)
  $player_tally = tally_hand(players_cards)
  $dealer_tally = tally_hand(dealers_cards)

  prompt("Your total is #{$player_tally}")
  twenty_one?($player_tally, $dealer_tally)

  loop do

    choice = ''
    loop do
      prompt("Would you like to 1. Hit or 2. Stay")
      choice = gets.chomp
    
      if choice == '2' || bust?($player_tally)
        break
      elsif choice == '1'
        new_card = DECK.sample
        $player_tally += player_hits(new_card)
        prompt("Your total is #{$player_tally}")
        break if bust?($player_tally)
      else
        prompt("Invalid choice. Please enter 1 to Hit or 2 to Stay.")
      end
    end

    if bust?($player_tally)
      puts "Player Bust, Dealer wins"
      break
    elsif $player_tally == 21
      puts "Player has 21, Player wins"
      break
    else choice == '2'
      puts "Player chose to stay"
    end

    loop do
      if $dealer_tally < 17
        new_card = DECK.sample
        $dealer_tally += dealer_hits(new_card)
        prompt("Dealer total is #{$dealer_tally}")
        break if bust?($dealer_tally)
      else
        break
      end
    end
    
    if bust?($dealer_tally)
      puts "Dealer Bust, Player wins"
      break
    elsif $dealer_tally == 21
      puts "Dealer has 21, Dealer wins"
      break
    else
      puts who_wins?($player_tally, $dealer_tally)
      break
    end
  end

  prompt("Would you like to play again? (y or n)")
    answer = gets.chomp.downcase
    break if answer == 'n'
end
