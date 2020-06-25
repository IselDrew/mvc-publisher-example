export class DeckModel {
  constructor() {
    this.deck = [];
  }

  addToDeck(card) {
    this.deck.push(card);
  }

  getDeck() {
      return this.deck;
  }
}
