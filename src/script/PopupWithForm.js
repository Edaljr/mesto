import { Popup } from "../script/Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmit, formElement, submitBtn) {
    super(selectorPopup);
    this._handleSubmit = handleSubmit;
    this._formElement = formElement;
    this._formList = Array.from(this._popup.querySelectorAll(".popup__input"));
    this._submitBtn = submitBtn;
  }

  _getInputValues() {
    const formValues = {};
    this._formList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      const btnText = this._submitBtn.textContent;
      console.log(this._submitBtn)
      e.preventDefault();
      this._submitBtn.textContent = "Сохранение...";

      try {
        this._handleSubmit(this._getInputValues())
      } finally {
        // Добавил setTimeout, потому что запрос отрабатывает слишком быстро и не видно изменений текста кнопки
        setTimeout(() => {
          this._submitBtn.textContent = btnText
          this.onPopupClose();
        }, 500);
      }
    });
  };

  onPopupClose() {
    super.onPopupClose();
    this._formElement.reset();
  }
}
