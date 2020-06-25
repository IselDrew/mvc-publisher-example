export class CardModel {
  constructor() {
    this.link = "https://api.scryfall.com/cards";
    this.card = {};
  }

  getRandomCard() {
    const requestLink = `${this.link}/random`;

    return fetch(requestLink)
      .then((response) => response.json())
      .then((card) => {
        this.card = card;
        return card;
      })
      .catch((error) => console.log(error));
  }

  getCard() {
    return this.card;
  }
}
