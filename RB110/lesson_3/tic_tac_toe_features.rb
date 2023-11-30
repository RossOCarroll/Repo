
require 'pry'

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +
                [[1, 5, 9], [3, 5, 7]]

def prompt(msg)
  puts "=> #{msg}"
end

# rubocop:disable Metric/MethodLength, Metrics/AbcSize
def display_board(brd)
  system 'clear'
  puts "You're an #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}"
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}  "
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}  "
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}  "
  puts "     |     |"
  puts ""
end
# rubocop:enable Metric/MethodLength, Metrics/AbcSize

def intialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

# def joiner(brd)
#   choices = ''

#   empty_squares(brd).each do |num|
#     if empty_squares(brd)[-1] == num
#       choices += "or #{num.to_s}"
#     else
#       choices += num.to_s + ', '
#     end
#   end
#   choices
# end

# def joiner(brd)
#   choices = ' '
#   if empty_squares(brd).size < 2
#     choices = "#{empty_squares(brd)[0]} or #{empty_squares(brd)[-1]}"
#   else 
#     empty_squares(brd).each do |num|
#       if empty_squares(brd)[-1] == num
#         choices += "or #{num.to_s}"
#       else
#         choices += num.to_s + ', '
#       end
#     end
#   end
# choices
# end

def joiner(brd, delim = ', ', word = 'or')
  case brd.size
  when 0 then ' '
  when 1 then brd.first.to_s
  when 2 then brd.join(" #{word} ")
  else
    brd[-1] = "#{word} #{brd.last}"
    brd.join(delim)
  end
end


def play_place_piece(brd)
  square = ''
  loop do
    prompt "Choose a square between (#{joiner(empty_squares(brd))}):"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry thats not a valid choice."
  end
    brd[square] = PLAYER_MARKER


end

def computer_place_piece!(brd)
  square = nil


  if !square
    WINNING_LINES.each do |line|
      square = find_at_risk_square(line, brd, COMPUTER_MARKER)
      break if square
    end
  end

  WINNING_LINES.each do |line|
    square = find_at_risk_square(line, brd, PLAYER_MARKER)
    break if square
  end

  if brd[5] == INITIAL_MARKER
    square = 5
    #binding.pry
  end

  if !square
    square = empty_squares(brd).sample
  end

  brd[square] = COMPUTER_MARKER
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def find_at_risk_square(line, brd, marker)
    if brd.values_at(line[0], line[1], line[2]).count(marker) == 2
      brd.select {|key, value| line.include?(key) && value == INITIAL_MARKER}.keys.first
    else
      nil
    end
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    # if brd[line[0]] == PLAYER_MARKER &&
    #    brd[line[1]] == PLAYER_MARKER &&
    #    brd[line[2]] == PLAYER_MARKER
    #   return 'Player'
    # elsif brd[line[0]] == COMPUTER_MARKER &&
    #       brd[line[1]] == COMPUTER_MARKER &&
    #       brd[line[2]] == COMPUTER_MARKER
    #   return 'Computer'
    # end
    if brd.values_at(line[0], line[1], line[2]).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(line[0], line[1], line[2]).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

player_score = 0
computer_score = 0

loop do
  board = intialize_board
  display_board(board)

  prompt 'Who will go first? (1 for player 2 for computer)'
  play_first = gets.chomp

  if play_first == 1

    loop do
      display_board(board)

      play_place_piece(board)
      break if someone_won?(board) || board_full?(board)

      computer_place_piece!(board)
      break if someone_won?(board) || board_full?(board)
    end

  else play_first == 2

    loop do
      display_board(board)

      computer_place_piece!(board)
      break if someone_won?(board) || board_full?(board)
      
      play_place_piece(board)
      break if someone_won?(board) || board_full?(board)
    end

  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
  else
    prompt "It's a tie!"
  end


  if detect_winner(board) == 'Player'
    player_score += 1
  elsif detect_winner(board) == 'Computer'
    computer_score += 1
  else
    next
  end

  prompt "Player Score: #{player_score}, Computer Score: #{computer_score}"

  break if player_score >= 5
  break if computer_score >= 5

  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

if player_score >= 5
  prompt "Player won the game!"
else computer_score >= 5
  prompt "Computer won the game... BOO"
end

prompt "Thanks for playing Tic Tac Toe! Goodbye!"