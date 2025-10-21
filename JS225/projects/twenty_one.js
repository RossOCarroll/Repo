// Twenty-one is a card game that consists of a dealer and a player where the participants get
// as close to the score of 21 as possible

// Nouns: card, player, dealer, participant, deck game, total
// Verbs: deal, hit, stay, busts

import shuffle from 'shuffle-array';
import readlineSync from 'readline-sync';

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  busted() {
    return this.total() > 21;
  }

  lookAtCards() {
    const lines = ['', '', '', '', '']; // 5 lines per card
  
    this.cards.forEach(card => {
      const top = '+-----+';
      const middleTop = `|${card.suit}   ${card.suit}|`;
      const middleRank = card.rank.length === 2
        ? `|  ${card.rank} |`
        : `|  ${card.rank}  |`;
      const middleBottom = `|${card.suit}   ${card.suit}|`;
      const bottom = '+-----+';
  
      lines[0] += top + ' ';
      lines[1] += middleTop + ' ';
      lines[2] += middleRank + ' ';
      lines[3] += middleBottom + ' ';
      lines[4] += bottom + ' ';
    });
  
    lines.forEach(line => console.log(line));
  }
  
  dealerShowing() {
    const card = this.cards[this.cards.length - 1];
    console.log('+-----+');
    console.log(`|${card.suit}   ${card.suit}|` );
    if (card.rank.length === 2) {
      console.log(`|  ${card.rank} |`);
    } else {
      console.log(`|  ${card.rank}  |`);
    }
    
    console.log(`|${card.suit}   ${card.suit}|` );
    console.log('+-----+');
  }

  total() {
    let points = 0;
    let aces = 0;

    for (const card of this.cards) {
      if (['J', 'Q', 'K'].includes(card.rank)) {
        points += 10;
      } else if (card.rank === 'A') {
        aces += 1;
        points += 11;
      } else {
        points += Number(card.rank);
      }
    }

    while (points > 21 && aces > 0) {
      points -= 10;
      aces -= 1;
    }

    return points;
  }

}


class Deck {
  constructor() {
    this.suits = ['♠', '♥', '♦', '♣'];
    this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.cards = this.createDeck()
  }

  createDeck() {
    const deck = []
    for (const suit of this.suits) {
      for (let rank of this.ranks) {
        deck.push( new Card(rank, suit));
      }
    }
    return deck;
  }

  shuffle() {
    return shuffle(this.cards);
  }

  dealCard() {
    return this.cards.pop();
  }
}

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class TwentyOneGame {

  constructor() {
    this.dealer = new Player();
    this.player = new Player();
  }

  play() {
    while (true) {
      console.clear();
      this.resetGame();
      
      this.deck.shuffle();
      this.dealInitialCards();

      this.playersTurn();
      if (this.player.busted()) {
        this.announcePlayerBust();
      } else {
        this.dealersTurn();
        if (this.dealer.busted()) {
          this.announceDealerBust();
        } else {
          this.showFinalHands();
        }
      }

      console.log('Would you like to play again? (y/n)');
      let choice = readlineSync.question('>>');
      if (choice !== 'y') {
        console.log('Thank you for playing black Jack!');
        break;
      }
    }
  }

  resetGame() {
    this.player.cards = [];
    this.dealer.cards = [];
    this.deck = new Deck();
    this.deck.shuffle();
  }

  dealersTurn() {
    while (this.dealer.total() < 17) {
      this.dealer.cards.push(this.deck.dealCard());
      console.log(`Dealer showing: ${this.dealer.total()}`);
      this.dealer.lookAtCards();
      console.log(`Player cards: ${this.player.total()}`);
      this.player.lookAtCards();
    }
  }

  showFinalHands() {
    console.log('Dealer showing:');
    this.dealer.lookAtCards();
    console.log(`Player cards: ${this.player.total()}`);
    this.player.lookAtCards();

    if (this.dealer.total() > this.player.total()) {
      console.log(`Dealer has: ${this.dealer.total()} Player has: ${this.player.total()}.`);
      console.log('Dealer wins');
    } else if (this.dealer.total() === this.player.total()) {
      console.log('Dealer push.')
    } else {
      console.log(`Dealer has: ${this.dealer.total()} Player has: ${this.player.total()}.`);
      console.log('Player wins');
    }
  }

  playersTurn() {
    while (this.player.total() < 21) {
      console.log('Would you like to hit or stay? (1: hit, 2: stay)')
      let choice = readlineSync.question('>>');

      if (choice === '1') {
        this.player.cards.push(this.deck.dealCard());
        console.log('Dealer showing:');
        this.dealer.dealerShowing();
        console.log(`Player cards: ${this.player.total()}`);
        this.player.lookAtCards();
      } else { break; }
    }
  }

  announcePlayerBust() {
    console.log('Dealer showing:');
    this.dealer.lookAtCards();
    console.log(`Player cards: ${this.player.total()}`);
    this.player.lookAtCards();
    console.log(`Player busts at ${this.player.total()}`);
    console.log('Dealer wins');
  }

  announceDealerBust() {
    console.log(`Dealer busts at ${this.dealer.total()}`);
    console.log('Player wins')
  }

  dealInitialCards() {
    this.player.cards.push(this.deck.dealCard());
    this.dealer.cards.push(this.deck.dealCard());
    this.player.cards.push(this.deck.dealCard());
    this.dealer.cards.push(this.deck.dealCard());

    console.log('Dealer showing:');
    this.dealer.dealerShowing();
    console.log(`Player cards: ${this.player.total()}`);
    this.player.lookAtCards();
    let playerBusts
  }

}

const game = new TwentyOneGame();
game.play();