export class Card {
  constructor(data, templateSelector, deleteCardPopup, handleCardElement, submitLike, submitRemoveLike) {
    this._imgLink = data.imgLink;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._cardElement = this._getTemplate();
    this._photoElement = this._cardElement.querySelector(".cards__photo");
    this._handleCardElement = handleCardElement;
    this._likeButton = this._cardElement.querySelector(".cards__like");
    this._deleteButton = this._cardElement.querySelector(".cards__btn-remove");
    this._likes = data.likes.length;
    this._likesCount = this._cardElement.querySelector(".cards__like-count");
    this._deletePopup = deleteCardPopup;
    this._itemCardId = data.itemCardId;
    this._userId = data.userId;
    this._cardOwnerId = data.cardOwnerId;
    this._submitLike = submitLike;
    this._submitRemoveLike = submitRemoveLike;
  }

  _getTemplate() {
    return this._templateSelector.querySelector(".cards__item").cloneNode(true);
  }

  generateCard() {
    this._setEventListeners();
    this._photoElement.src = this._imgLink;
    this._cardElement.querySelector(".cards__title").textContent = this._name;
    this._photoElement.alt = this._name;
    this._likesCount.textContent = this._likes;

    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
    return this._cardElement;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () =>
      this._deleteCard(this._deletePopup, this._itemCardId)
    );
    this._photoElement.addEventListener("click", () =>
      this._handleCardElement()
    );
    this._likeButton.addEventListener("click", (evt) => this._handleLikeIcon(evt));
  }

  _deleteCard(deletePopup) {
    deletePopup.onPopupOpen(this._itemCardId, this._cardElement);
  }

  _handleLikeIcon(evt) {
    if (evt.target.classList.contains("cards__like-active")) {
      this._submitRemoveLike(this._itemCardId, this);
    } else {
      this._submitLike(this._itemCardId, this);
    }
    evt.target.classList.toggle("cards__like-active");
  }

  setLikesCount(likes) {

    this._likesCount.textContent = likes.length || 0;
  }
}
