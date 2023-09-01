import { Popup } from "../script/Popup.js";

export class PopupWithAvatar extends Popup {
  constructor(selectorPopup, handleChangeAvatar) {
    super(selectorPopup);
    this._handleChangeAvatar = handleChangeAvatar;
    this._submitAvatarBtn = document.querySelector(".popup__btn-save");
    this._newAvatarInput = selectorPopup.querySelector(".popup__input");
    this._avatarForm = document.querySelector('form[name="avatarForm"]');
  }

  onPopupOpen() {
    super.onPopupOpen();
    this._setEventListeners();
  }

  onPopupClose() {
    super.onPopupClose();
    this._avatarForm.reset();
  }

  _setEventListeners() {
    super.setEventListeners();
    this._submitAvatarBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
        this._submitAvatarBtn .textContent = "Сохранение...";
        try {
          this._handleChangeAvatar(this._newAvatarInput.value)
        } finally {
          // Добавил setTimeout, потому что запрос отрабатывает слишком быстро и не видно изменений текста кнопки
          setTimeout(() => {
            this._submitAvatarBtn.textContent = "Сохранить"
            this.onPopupClose();
          }, 500);
        }
      });



      }


  }

