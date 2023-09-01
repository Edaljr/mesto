import { Popup } from "../script/Popup.js";

export class PopupConfirmDelete extends Popup {
  constructor(selectorPopup, submitDeleteCard) {
    super(selectorPopup);
    this._cardId = null;
    this._cardElement = null;
    this._cardDeleteBtn = document.querySelector(".popup__btn-delete");
    this._submitDeleteCard = submitDeleteCard;
  }

  onPopupOpen(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.onPopupOpen();
    this._setEventListeners();
  }

  _setEventListeners() {
    super.setEventListeners();
    this._cardDeleteBtn.textContent = "Да"
    this._cardDeleteBtn.addEventListener("click", async () =>
      {
        this._cardDeleteBtn.textContent = "Удаление..."
        try {
          await this._submitDeleteCard(this._cardId, this._cardElement)
        } finally {
          setTimeout(() => {

            this._cardElement.remove();
            super.onPopupClose();
          }, 500);




        }
      }
    );
  }
}
