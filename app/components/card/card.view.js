export class CardView {
  constructor(handleClickRandomCard, handleDeck) {
    this.magicCard = document.querySelector(".magic-card");
    this.getCardBtn = document.querySelector(".get-card-btn");
    this.getCardBtn.addEventListener('click', handleClickRandomCard);
    this.magicCard.addEventListener('click', handleDeck)
  }

  renderCard(link) {
    this.magicCard.innerHTML = `<img src=${link} alt='card' />`
  }
}
