const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
class Game {
  #word
  #guesses
  #misses
  static words = ['apple', 'banana', 'orange', 'pear'];

  constructor() {
    this.#word = Game.getRandomWord();
    //this.#word = ['a', 'p', 'p', 'l', 'e'];
    this.#guesses = new Array(this.#word.length).fill('');
    this.#misses = [];
    this.wrongGuesses = 0;

    if (!this.#word) {
      throw new Error('Out of Words');
    }
  }

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    let randomIdx = Math.floor(Math.random() * Game.words.length)
    return Game.words.splice(randomIdx, 1)[0].split('');
  };

  get word() {
    return this.#word;
  }

  get guesses() {
    return this.#guesses;
  }

  get misses() {
    return this.#misses;
  }

  addGuess(guess, index) {
    this.#guesses[index] = guess;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    let found = false;

    this.#word.forEach((letter, index) => {
      if (letter === guess) {
        this.addGuess(guess, index);
        found = true;
      }
    });

    this.#misses.push(guess);
  }

  won() {
    return this.#word.join('') === this.#guesses.join('');
  }

  lose() {
    return this.wrongGuesses >= 6;
  }

};

function displayUnderscores(game, container) {
  let length = game.word.length;
  
  for (let i = 0; i < length; i++) {
    let span = document.createElement('span');
    container.appendChild(span);
  }
} 

function renderWord(displayWord, displayGuesses, game) {
  displayWord.querySelectorAll('span').forEach(span => span.remove());
  displayGuesses.querySelectorAll('span').forEach(span => span.remove());


  game.guesses.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    displayWord.appendChild(span);
  });

  game.misses.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    displayGuesses.appendChild(span);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  const displayWord = document.querySelector('#spaces');
  const displayGuesses = document.querySelector('#guesses');
  const message = document.getElementById('message');
  const body = document.querySelector('body');
  const playAgain = document.getElementById('replay');
  playAgain.classList.remove('visible');
  
  playAgain.addEventListener('click', event => {
    window.location.reload();
  })

  displayUnderscores(game, displayWord);
  
  function handleKeyup(event) {
    let key = event.key.toLowerCase();
    const apples = document.getElementById('apples');

    if (alphabet.includes(key) && !game.misses.includes(key) && !game.guesses.includes(key)) {
      const found = game.word.includes(key);
      game.makeGuess(key);
      renderWord(displayWord, displayGuesses, game);

      if (!found) {
        game.wrongGuesses++;
        apples.classList.add(`guess_${game.wrongGuesses}`);
      }
    };

    if (game.won()) {
      message.textContent = 'You Win!';
      document.removeEventListener('keyup', handleKeyup); 
      body.classList.add('win');
      playAgain.classList.add('visible');
    };

    if (game.lose()) {
      message.textContent = `Sorry! You're out of guesses`;
      document.removeEventListener('keyup', handleKeyup); 
      body.classList.add('lose');
      playAgain.classList.add('visible');
    };

  }

  document.addEventListener('keyup', handleKeyup);
});