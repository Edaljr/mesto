import { Popup } from "../script/Popup.js";

export class PopupWithForm extends Popup {
  constructor(selectorPopup, handleSubmit, formElement) {
    super(selectorPopup);
    this._handleSubmit = handleSubmit;
    this._formElement = formElement;
    this._formList = Array.from(this._popup.querySelectorAll(".popup__input"));
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
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.onPopupClose();
    });
  };

  onPopupClose() {
    super.onPopupClose();
    this._formElement.reset();
  }
}
