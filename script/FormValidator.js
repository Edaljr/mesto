export class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = form;
  }

  //Sostoyanie knopki disabled/enabled
  _toogleButtonState(buttonElement, isActive) {
    if (!isActive) {
      this._disabledButton(buttonElement, this._inactiveButtonClass);
    } else {
      this._enabledButton(buttonElement, this._inactiveButtonClass);
    }
  }

  //function knopki disabled
  _disabledButton(buttonElement, btnClass) {
    buttonElement.disabled = "disabled";
    buttonElement.classList.add(btnClass);
  }

  //function knopki enabled
  _enabledButton(buttonElement, btnClass) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(btnClass);
  }

  //Poisk form i veshaem obrabotchik,Poisk Inputov, knopki / disable knopki /obrabotchik na inputi
  enableValidation() {
    const inputList = this._form.querySelectorAll(this._inputSelector);
    const submitButtonElement = this._form.querySelector(
      this._submitButtonSelector
    );
    [...inputList].forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        const valid = this._form.checkValidity();

        this._toogleButtonState(submitButtonElement, valid);
        this._checkInputValidity(inputElement, this._form);
      });
    });
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const valid = this._form.checkValidity();
      if (!valid) return;
    });
  }

  //proverka Validnosti inputov
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

  //pokazat' text oshibki
  _showError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  //spryatat' text oshibki
  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
}
