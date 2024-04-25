class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end

  # def play
  #   'eyes down'
  # end
end

# If we were to add a play method defintion to the bingo class that method would override
# the play method in the super class Game.

game_of_bingo = Bingo.new
puts game_of_bingo.play