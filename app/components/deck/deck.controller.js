import { DeckModel } from "./deck.model.js";
import { DeckView } from "./deck.view.js";

export class DeckController {
  constructor() {
    this.model = new DeckModel();
    this.view = new DeckView();
  }

  handleDeck(card) {
    this.model.addToDeck(card);
    const deck = this.model.getDeck();
    this.view.renderDeck(deck);
  }
}
