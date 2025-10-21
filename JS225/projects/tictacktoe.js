// Tic Tac Toe is a 2 player game played on a 3 x 3 grid. Players take turns marking a square. The first player
// get 3 squares in a row, horiszontal or diagnol win the game.

// Nouns: board, player, square, grid
// Verbs; play, mark

import readlineSync from 'readline-sync';
import data from './data.json' with { type: 'json' };

class Board {
  constructor() {
    this.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  }

  displayBoard() {
      console.log(` ${this.board[0]} | ${this.board[1]} | ${this.board[2]}`);
      console.log('---+---+---');
      console.log(` ${this.board[3]} | ${this.board[4]} | ${this.board[5]}`);
      console.log('---+---+---');
      console.log(` ${this.board[6]} | ${this.board[7]} | ${this.board[8]}`);
  }

  markSquare(square, marker) {
    if (square >= 1 && square <= 9) {
      this.board[square - 1] = marker;
    }
  }

  isSquareEmpty(square) {
    return this.board[square - 1] === ' ';
  }

  availableSquares() {
    let squares = []
    this.board.forEach((square, index) => {
      if (square === ' ') {
        squares.push(index + 1)
      }
    })

    return squares;
  }

  checkForWinner(marker) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    return lines.some(line =>
      line.every(idx => this.board[idx] === marker)
    );
  }

  resetSquare(square) {
    this.board[square - 1] = ' ';
  }

  static boardGuide() {
    console.log(` 1 | 2 | 3`);
    console.log('---+---+---');
    console.log(` 4 | 5 | 6`);
    console.log('---+---+---');
    console.log(` 7 | 8 | 9`);
  }

}

class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
    this.wins = 0;
  }

  moves(board) {
    console.log(`${this.name} makes a move choose between 1 - 9`);
    let choice;
    let square;
    let availableSquares = board.availableSquares();

    while(true) {
      choice = readlineSync.question('> ');
      square = Number(choice);

      if (/^[1-9]$/.test(choice) && board.isSquareEmpty(square)) {
        break;
      } else {
        console.log(`Invalid input: Please choose a number between ${availableSquares}`)
      }
    }

    board.markSquare(square, this.marker);
  }

  static getPlayerName() {
    console.log('What is your name?');
    let name;

    while (true) {
      name = readlineSync.question('> ');

      if(name) {
        break;
      } else {
        console.log('Please Enter a name')
      }
    }
    return name;
  }

  static getMarker() {
    console.log('Please Choose a Marker');
    let marker;

    while (true) {
      marker = readlineSync.question('> ');

      if(marker.length === 1) {
        break;
      } else {
        console.log('Please Enter a character that is 1 character long.')
      }
    }
    return marker;
  }
}

class Computer {

  constructor() {
    this.name = Computer.getComputerName();
    this.marker = 'O';
    this.wins = 0;
  }

  possibleToWin(availableSquares, board, marker) {
    for (let square of availableSquares) {
      board.markSquare(square, marker);

      if (board.checkForWinner(marker)) {
        board.resetSquare(square);
        return square;
      }

      board.resetSquare(square);
    }

    return null;
  }

  moves(board, player) {
    let availableSquares = board.availableSquares();

    const winningMove = this.possibleToWin(availableSquares, board, this.marker);
    if (winningMove) {
      board.markSquare(winningMove, this.marker);
      return;
    }

    const blockingMove = this.possibleToWin(availableSquares, board, player.marker);
    if (blockingMove) {
      board.markSquare(blockingMove, this.marker);
      return;
    }

    if (!blockingMove && !winningMove && board.board[4] === ' ') {
      board.markSquare(5, this.marker);
      return;
    }

    const randomIdx = Math.floor(Math.random() * availableSquares.length);
    const compChoice = availableSquares[randomIdx]

    board.markSquare(compChoice, this.marker);
  }

  static getComputerName() {
    const computerNames = ['Johnny 5', 'R2D2', '3CPO'];

    const randomIdx = Math.floor(Math.random() * computerNames.length);
    return computerNames[randomIdx];
  }
}

class TTTPlay {
  play() {
    this.displayWelcomeMessage();
    let name = Player.getPlayerName();
    let marker = Player.getMarker();
    this.player = new Player(name, marker);
    this.computer = new Computer();

    if (this.player.marker === 'O') {
      this.computer.marker = 'X';
    } 

    let playerStarts = true; 

    while (this.player.wins < 3 && this.computer.wins < 3) {
      this.board = new Board();
      console.log('\n--- New Round ---');
      this.displayScores();

      let roundOver = false;
      let currentTurn = playerStarts ? 'player' : 'computer';

      while (!roundOver) {
        if (currentTurn === 'player') {
          Board.boardGuide()
          this.player.moves(this.board);
          this.board.displayBoard();
          this.displayScores();

          if (this.board.checkForWinner(this.player.marker)) {
            console.log('🎉 Player Wins this round!');
            this.player.wins++;
            roundOver = true;
          } else if (this.board.availableSquares().length === 0) {
            console.log("It's a Draw!");
            roundOver = true;
          } else {
            currentTurn = 'computer';
          }

        } else {
          this.computer.moves(this.board, this.player);
          this.board.displayBoard();
          this.displayScores();

          if (this.board.checkForWinner(this.computer.marker)) {
            console.log(`💻 ${this.computer.name} Wins this round!`);
            this.computer.wins++;
            roundOver = true;
          } else if (this.board.availableSquares().length === 0) {
            console.log("It's a Draw!");
            roundOver = true;
          } else {
            currentTurn = 'player';
          }
        }
      }

      playerStarts = !playerStarts;
    }

    if (this.player.wins === 3) {
      console.log(`\n🏆 ${this.player.name} has won the match!`);
    } else {
      console.log(`\n🏆 ${this.computer.name} has won the match!`);
    }

    this.displayGoodbyeMessage();
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe. Goodbye!');
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe Game');
  }

  displayScores() {
    console.log(`Scores >> ${this.player.name}: ${this.player.wins} ${this.computer.name}: ${this.computer.wins}`);
  }
}

const game = new TTTPlay();
game.play();