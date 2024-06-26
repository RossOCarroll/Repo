class User 
  attr_reader :guesses, :answer

  def initialize
    @guesses = 7
    @answer = nil
  end

  def take_guess
    loop do
      puts "Enter a number between 1 and 100:"
      @answer = gets.chomp.to_i
      break if (1..100).include?(@answer)
      puts "Invalid input. Enter a number between 1 and 100:"
    end
    @guesses -= 1
  end

  def guess_correctly?
    @answer == GuessingGame::TARGET_NUM
  end

  def wins
    puts "Congradulation you guessed the correct number #{GuessingGame::TARGET_NUM}"
  end
end

class GuessingGame
  attr_reader :user
  TARGET_NUM = (0..100).to_a.sample

  def initialize
    @user = User.new
  end

  def play
    loop do
      display_guesses
      user.take_guess
      if user.guess_correctly?
        user.wins
        break
      end
      low_or_high
      break if user.guesses <= 0
    end
    puts "You ran out of guesses!"
  end

  def display_guesses
    puts "You have #{user.guesses} remaining." 
  end

  def low_or_high
    if user.answer < TARGET_NUM
      puts "Your guess is too low"
    else 
      puts "Your guess is too high"
    end
  end
end




game = GuessingGame.new
game.play

# You have 7 guesses remaining.
# Enter a number between 1 and 100: 104
# Invalid guess. Enter a number between 1 and 100: 50
# Your guess is too low.

# You have 6 guesses remaining.
# Enter a number between 1 and 100: 75
# Your guess is too low.

# You have 5 guesses remaining.
# Enter a number between 1 and 100: 85
# Your guess is too high.

# You have 4 guesses remaining.
# Enter a number between 1 and 100: 0
# Invalid guess. Enter a number between 1 and 100: 80

# You have 3 guesses remaining.
# Enter a number between 1 and 100: 81
# That's the number!

# You won!

# game.play

# You have 7 guesses remaining.
# Enter a number between 1 and 100: 50
# Your guess is too high.

# You have 6 guesses remaining.
# Enter a number between 1 and 100: 25
# Your guess is too low.

# You have 5 guesses remaining.
# Enter a number between 1 and 100: 37
# Your guess is too high.

# You have 4 guesses remaining.
# Enter a number between 1 and 100: 31
# Your guess is too low.

# You have 3 guesses remaining.
# Enter a number between 1 and 100: 34
# Your guess is too high.

# You have 2 guesses remaining.
# Enter a number between 1 and 100: 32
# Your guess is too low.

# You have 1 guess remaining.
# Enter a number between 1 and 100: 32
# Your guess is too low.

# You have no more guesses. You lost!