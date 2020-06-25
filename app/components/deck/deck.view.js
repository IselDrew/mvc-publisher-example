export class DeckView {
  constructor() {
    this.deck = document.querySelector('.deck');
  }

  renderDeck(deckArr) {
      const deck = deckArr.map(card => (`<img src=${card.image_uris.small} alt=${card.name}/>`)).join('');
      this.deck.innerHTML = deck;
  }
}
