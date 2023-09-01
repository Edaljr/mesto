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

  addItem(card, position = 'append') {
    switch (position) {
      case 'append':
        this._container.append(card);
        break;
        case 'prepend':
          this._container.prepend(card);
          break;
      default:
        console.log('передана неверная позиция рендера');
        break;
    }

  }
}
