import { CardModel } from "./card.model.js";
import { CardView } from "./card.view.js";

export class CardController {
  constructor({ notify }) {
    this.model = new CardModel();
    this.view = new CardView(
      this.handleClickRandomCard.bind(this),
      this.handleDeck.bind(this)
    );

    this.notify = notify;
  }

  handleDeck() {
    const card = this.model.getCard();
    this.notify('add-to-deck', card)
  }

  handleClickRandomCard() {
    this.model
      .getRandomCard()
      .then((card) => this.view.renderCard(card.image_uris.normal));
  }
}
