export class Section {
  constructor(renderData, selectorContainer) {
    this._cards = renderData.items;
    this._renderCard = renderData.render;
    this._container = selectorContainer;
  }

  renderCards() {
    window.addEventListener("load", () => {
      this._cards.forEach((cardItem) => {
        this._renderCard(cardItem);
      });
    });
  }

  addItem(card) {
    this._container.prepend(card);
  }
}
