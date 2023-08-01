import * as selector from "../data/constants.js";

export class Card {
  constructor(data, templateSelector) {
    this._imgLink = data.imgLink;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return this._templateSelector.querySelector(".cards__item").cloneNode(true);
  }

  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".cards__photo").src = this._imgLink;
    this._cardElement.querySelector(".cards__title").textContent = this._name;
    this._cardElement.querySelector(".cards__photo").alt = this._name;
    return this._cardElement;
  }

  _setEventListeners() {
    const likeButton = this._cardElement.querySelector(".cards__like");
    const cardImage = this._cardElement.querySelector(".cards__photo");
    const deleteButton = this._cardElement.querySelector(".cards__btn-remove");
    deleteButton.addEventListener("click", () => this._deleteCard(this._cardElement));
    cardImage.addEventListener("click", () =>
      this._handlePreviewImage(this._imgLink, this._name)
    );
    likeButton.addEventListener("click", (evt) => {
      this._handleLikeIcon(evt);
    });
  }

  _deleteCard(card) {
    card.remove();
  }

  _handlePreviewImage() {
    selector.imageElement.src = this._imgLink;
    selector.imageElement.alt = `Изображение ${this._name}`;
    selector.previewPopupSubtitle.textContent = this._name;
    this._onPopupOpen(selector.previewPopup);
  }
  _onPopupOpen(modalWindow) {
    modalWindow.classList.add("popup_opened");
    this._keyHandler();
  }

  _keyHandler() {
    document.addEventListener("keydown", this._keyDownHandler, true);
  }

  _keyDownHandler(evt) {
    const openedPopup = document.querySelector(".popup_opened");
    if (evt.key === "Escape") {
      openedPopup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._keyDownHandler, true);;
    }
  }

  _handleLikeIcon = (evt) => {
    evt.target.classList.toggle("cards__like-active");
  };
}
