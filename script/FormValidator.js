export class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
    this._submitButtonElement = form.querySelector(this._submitButtonSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector);
  }

  //Sostoyanie knopki disabled/enabled
  _toggleButtonState(isActive) {
    if (!isActive) {
      this.disabledButton();
    } else {
      this._enabledButton();
    }
  }

  //function button disabled
  disabledButton() {
    this._submitButtonElement.disabled = "disabled";
    this._submitButtonElement.classList.add(this._inactiveButtonClass);
  }

  //function button enabled
  _enabledButton() {
    this._submitButtonElement.disabled = false;
    this._submitButtonElement.classList.remove(this._inactiveButtonClass);
  }

  //Poisk form i veshaem obrabotchik,Poisk Inputov, knopki / disable knopki /obrabotchik na inputi
  enableValidation() {
    [...this._inputList].forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const valid = this._form.checkValidity();
        this._toggleButtonState(valid);
        this._checkInputValidity(inputElement, this._form);
      });
    });
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const valid = this._form.checkValidity();
      if (!valid) return;
    });
  }

  //check Validity of inputs
  _checkInputValidity(inputElement) {
    const isInputValid = inputElement.validity.valid;
    const errorElement = this._form.querySelector(
      `#${inputElement.name}-error`
    );
    if (!isInputValid) {
      this._showError(inputElement, errorElement);
    } else {
      this._hideError(inputElement, errorElement);
    }
  }

  //Show text error
  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  //Hide text error
  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  }

  //Reset validation Message
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      const errorElement = this._form.querySelector(
        `#${inputElement.name}-error`
      );
      this._hideError(inputElement, errorElement);
    });
  }
}
