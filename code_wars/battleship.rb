class Board
  attr_accessor :board

  def initialize
    @board = []
    create_board
  end

  def create_board
    across = []
    4.times do |space| 
      @board << [0, 0, 0, 0, 0, 0]
    end

  end

end



class Player
  attr_accessor :name, :board

  def initialize
    @name = nil
    @board = Board.new
  end


end


class BattleShipGame
  attr_reader :user, :computer

  def initialize
    @user = Player.new
    @computer = Player.new
  end

  def play  
    p user.board
  
  end


end

game = BattleShipGame.new

game.play