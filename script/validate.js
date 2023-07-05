function showError(inputElement, errorElement) {
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement) {
  inputElement.classList.remove("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}

function checkInputValidity(inputElement, formElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInputValid) {
    showError(inputElement, errorElement);
  } else {
    hideError(inputElement, errorElement);
  }
}

function disabledButton(buttonElement) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add("popup__button_disabled");
}

function enabledButton(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.classList.remove("popup__button_disabled");
}

function toogleButtonState(buttonElement, isActive) {
  if (!isActive) {
    disabledButton(buttonElement);
  } else {
    enabledButton(buttonElement);
  }
}

function setEventListener(formElement) {
  const inputList = formElement.querySelectorAll(".popup__input");
  const submitButtonElement = formElement.querySelector(".popup__button");
  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      toogleButtonState(submitButtonElement, formElement.checkValidity());
      checkInputValidity(inputElement, formElement);
    });
  });
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
  });
}

function enableValidation() {
  const formList = document.querySelectorAll(".popup__form");
  [...formList].forEach(function (formElement) {
    setEventListener(formElement);
  });
}

enableValidation();

