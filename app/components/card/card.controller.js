import { CardModel } from "./card.model.js";
import { CardView } from "./card.view.js";

export class CardController {
  constructor(addToDeck) {
    this.model = new CardModel();
    this.view = new CardView(
      this.handleClickRandomCard.bind(this),
      this.handleDeck.bind(this)
    );

    this.addToDeck = addToDeck;
  }

  handleDeck() {
    const card = this.model.getCard();
    this.addToDeck(card);
  }

  handleClickRandomCard() {
    this.model
      .getRandomCard()
      .then((card) => this.view.renderCard(card.image_uris.normal));
  }
}
