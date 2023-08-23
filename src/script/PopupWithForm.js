import { editFormElement } from "../data/constants.js";
import { Popup } from "../script/Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, handleSubmit, formElement) {
    super(popup);
    this._handleSubmit = handleSubmit;
    this._formElement = formElement;
  }

  _getInputValues = () => {
    const formValues = {};
    const formList = editFormElement.querySelectorAll(".popup__input");

    formList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  };

  submit = () => {
    this._handleSubmit(this._getInputValues());
  };

  onPopupClose() {
    super.onPopupClose();
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this.submit);
  };
}
