export class Card {
  constructor(data, templateSelector, handleCardElement) {
    this._imgLink = data.imgLink;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._photoElement = this._cardElement.querySelector(".cards__photo");
    this._handleCardElement = handleCardElement;
    this._likeButton = this._cardElement.querySelector(".cards__like");
    this._deleteButton = this._cardElement.querySelector(".cards__btn-remove");
  }

  _getTemplate() {
    return this._templateSelector.querySelector(".cards__item").cloneNode(true);
  }

  generateCard() {
    this._setEventListeners();
    this._photoElement.src = this._imgLink;
    this._cardElement.querySelector(".cards__title").textContent = this._name;
    this._photoElement.alt = this._name;
    return this._cardElement;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._deleteCard(this._cardElement));

    this._photoElement.addEventListener("click", () =>
      this._handleCardElement()
    );
    this._likeButton.addEventListener("click", this._handleLikeIcon, false);
  }

  _deleteCard(card) {
    card.remove();
  }

  _handleLikeIcon (evt) {
    evt.target.classList.toggle("cards__like-active");
  };
}
