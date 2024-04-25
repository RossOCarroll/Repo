class Move
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def to_s
    @value
  end
end

class Rock
  def >(other_move)
    other_move.is_a?(Scissors) || other_move.is_a?(Lizard)
  end

  def <(other_move)
    other_move.is_a?(Paper) || other_move.is_a?(Spock)
  end

  def to_s
    'rock'
  end
end

class Paper
  def >(other_move)
    other_move.is_a?(Rock) || other_move.is_a?(Spock)
  end

  def <(other_move)
    other_move.is_a?(Scissors) || other_move.is_a?(Lizard)
  end

  def to_s
    'paper'
  end
end

class Scissors
  def >(other_move)
    other_move.is_a?(Paper) || other_move.is_a?(Lizard)
  end

  def <(other_move)
    other_move.is_a?(Rock) || other_move.is_a?(Spock)
  end

  def to_s
    'scissors'
  end
end

class Spock
  def >(other_move)
    other_move.is_a?(Scissors) || other_move.is_a?(Rock)
  end

  def <(other_move)
    other_move.is_a?(Paper) || other_move.is_a?(Lizard)
  end

  def to_s
    'spock'
  end
end

class Lizard
  def >(other_move)
    other_move.is_a?(Spock) || other_move.is_a?(Paper)
  end

  def <(other_move)
    other_move.is_a?(Rock) || other_move.is_a?(Scissors)
  end

  def to_s
    'lizard'
  end
end

class Player
  attr_accessor :move, :name

  def initialize
    set_name
  end
end

class Human < Player
  def set_name
    n = ""
    loop do
      puts "Whats your name?"
      n = gets.chomp
      break unless n.empty?
      puts "Sorry must enter a value"
    end
    self.name = n
  end
end

class Computer < Player
  def set_name
    self.name = ['R2d2', 'Hal', 'Chappie', 'Sonny', 'Number 5'].sample
  end
end

class Score < Player
  attr_accessor :human_score, :computer_score, :human, :computer

  def initialize(human, computer)
    super
    @human = human
    @computer = computer
    @human_score = 0
    @computer_score = 0
  end

  def display_scores
    puts "#{human.name} score is: #{@human_score} | #{computer.name} score is #{@computer_score}"
  end

  def score_human
    puts "Scoring for human..."
    @human_score ||= 0
    @human_score += 1
    puts "Human score: #{@human_score}"
  end

  def score_computer
    puts "Scoring for computer..."
    @computer_score ||= 0
    @computer_score += 1
    puts "Computer score: #{@computer_score}"
  end

  def check_for_winner?
    @computer_score >= 10 || @human_score >= 10
  end

  def winner_of_match
    if @human_score >= 10
      puts "Congratulations #{human.name} has won the match"
    elsif @computer_score >= 10
      puts "#{computer.name} has won the match"
    end
  end
end

class RPSGame
  attr_accessor :human, :computer, :game
  
  def initialize
    @human = Human.new
    @computer = Computer.new
    @game = Score.new(human, computer)
    @moves = {
      'rock' => Rock.new,
      'paper' => Paper.new,
      'scissors' => Scissors.new,
      'lizard' => Lizard.new,
      'spock' => Spock.new
    }
    @history = {}
  end

  def display_welcome_message
    puts "Welcome to Rock, Paper, Scissors!"
  end

  def display_history
    if !@history.empty?
      puts "=> Game history:"
      @history.each do |human_move, computer_move|
        puts "=> #{human.name} chose : #{human_move}, #{computer.name} chose : #{computer_move}"
      end
    end
  end

  def display_goodbye_message
    puts "Thank you for playing Rock, Paper, Scissiors"
  end

  def display_moves
    puts "#{human.name} chose: #{human.move}"
    puts "#{computer.name} chose: #{computer.move}"
  end

  def human_choose
    choice = nil
    loop do
      puts "Please choose Rock, Paper, Scissors, Lizard, or Spock?"
      choice = gets.chomp.downcase
      break if @moves.key?(choice)
      puts "Sorry, invalid choice"
    end
    human.move = @moves[choice]
  end

  def computer_choose
    if computer.name == 'R2d2'
      computer.move = @moves['rock']
    elsif computer.name == 'Hal'
      computer.move = [ @moves['scissors'],
                        @moves['scissors'],
                        @moves['scissors'],
                        @moves['rock'],
                        @moves['lizard'],
                        @moves['lizard'],
                        @moves['spock'],
                        @moves['spock']].sample
    else
      computer.move = @moves.values.sample
    end
  end

  def display_winner
    puts "Debug: #{human.name} chose: #{human.move}"
    puts "Debug: #{computer.name} chose: #{computer.move}"
  
    if human.move > computer.move
      puts "#{human.name} won!"
      game.score_human
      @history[human.move] = computer.move
    elsif human.move < computer.move
      puts "#{computer.name} won!"
      game.score_computer
      @history[human.move] = computer.move
    else
      puts "It's a tie!"
      @history[human.move] = computer.move
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      puts "Sorry, must be y or n."
    end

    return true if answer == 'y'
    false
  end

  def play
    display_welcome_message
    loop do
      game.display_scores
      display_history
      human_choose
      computer_choose
      display_moves
      display_winner
      if game.check_for_winner?
        game.winner_of_match
        break
      end
      break unless play_again?
      system 'clear'
    end
    display_goodbye_message
  end
end

RPSGame.new.play


