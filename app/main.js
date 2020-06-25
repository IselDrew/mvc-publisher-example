import { CardController } from "./components/card/card.controller.js";
import { DeckController } from "./components/deck/deck.controller.js";
import { Publisher } from "./helpers/Publisher.js"

const publisher = new Publisher();
const deckController = new DeckController(publisher.methods);
const cardController = new CardController(publisher.methods);