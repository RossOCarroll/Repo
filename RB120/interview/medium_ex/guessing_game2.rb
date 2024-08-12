module Guessing
  attr_reader :low, :high, :size_of_range
  ACCEPTED_NUMBERS = (1..100).to_a
  

  def display_guesses
    puts "You have #{@max_guesses} guessing remaining."
  end

  def get_guess
    puts "Please choose a number between #{self.low} and #{self.high}."
    loop do
      guess = gets.chomp.to_i
      if guess.zero? || !self.size_of_range.include?(guess)
        puts "Invalid guess. Please enter a number between #{self.low} and #{self.high}."
      else
        @guess = guess
        @max_guesses -= 1
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
    @max_guesses == 0
  end
end


class GuessingGame
  include Guessing


  def initialize(low, high)
    @low = low
    @high = high
    @size_of_range = (low..high).to_a
    @guess = nil
    @correct_number = @size_of_range.sample
    @max_guesses = Math.log2(high - low + 1).to_i + 1
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



game = GuessingGame.new(501, 1500)
game.play