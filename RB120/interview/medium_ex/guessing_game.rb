module Guessing
  ACCEPTED_NUMBERS = (1..100).to_a
  @@number_of_guesses = 7

  def display_guesses
    puts "You have #{@@number_of_guesses} guessing remaining."
  end

  def get_guess
    puts "Please choose a number between 1 and 100."
    loop do
      guess = gets.chomp.to_i
      if guess.zero? || !ACCEPTED_NUMBERS.include?(guess)
        puts "Invalid guess. Please enter a number between 1 and 100"
      else
        @guess = guess
        @@number_of_guesses -= 1
        break
      end
    end
  end

  def verify_number
    if user_won?
      puts "Thats the right number!"
    elsif @guess < @correct_number
      puts "That guess is too low "
    else
      puts "That guess is too high"
    end
  end

  def user_won?
    @guess == @correct_number
  end

  def no_more_guesses?
    @@number_of_guesses == 0
  end
end



class GuessingGame
  include Guessing


  def initialize
    @guess = nil
    @correct_number = ACCEPTED_NUMBERS.sample

  end

  def play
    loop do
      display_guesses
      get_guess
      verify_number
      break if user_won? || no_more_guesses?
    end
  end
end



game = GuessingGame.new
game.play