import { DeckModel } from "./deck.model.js";
import { DeckView } from "./deck.view.js";

export class DeckController {
  constructor({ subscribe }) {
    this.model = new DeckModel();
    this.view = new DeckView();

    this.subscribe = subscribe;
    this.subscribe('add-to-deck', this.handleDeck.bind(this));
  }

  handleDeck(card) {
    this.model.addToDeck(card);
    const deck = this.model.getDeck();
    this.view.renderDeck(deck);
  }
}
