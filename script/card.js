import {
  imageElement,
  previewPopupSubtitle,
  previewPopup,
  } from "../data/constants.js";
import {onPopupOpen} from "./index.js"

export class Card {
  constructor(data, templateSelector) {
    this._imgLink = data.imgLink;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._photoElement = this._cardElement.querySelector(".cards__photo");
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
    const likeButton = this._cardElement.querySelector(".cards__like");
    const cardImage = this._photoElement;
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
    imageElement.src = this._imgLink;
    imageElement.alt = `Изображение ${this._name}`;
    previewPopupSubtitle.textContent = this._name;
    onPopupOpen(previewPopup);
  }

  _handleLikeIcon = (evt) => {
    evt.target.classList.toggle("cards__like-active");
  };
}
