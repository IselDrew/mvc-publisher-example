import { CardController } from "./components/card/card.controller.js";
import { DeckController } from "./components/deck/deck.controller.js";

const deckController = new DeckController();
const cardController = new CardController(deckController.handleDeck.bind(deckController));