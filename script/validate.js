//pokazat' text oshibki
function showError(inputElement, errorElement) {
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}

//spryatat' text oshibki
function hideError(inputElement, errorElement) {
  inputElement.classList.remove("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}

//proverka Validnosti inputov
function checkInputValidity(inputElement, formElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInputValid) {
    showError(inputElement, errorElement);
  } else {
    hideError(inputElement, errorElement);
  }
}

//function knopki disabled
function disabledButton(buttonElement) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add("popup__button_disabled");
}
//function knopki enabled
function enabledButton(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.classList.remove("popup__button_disabled");
}

//Sostoyanie knopki disabled/enabled
function toogleButtonState(buttonElement, isActive) {
  if (!isActive) {
    disabledButton(buttonElement);
  } else {
    enabledButton(buttonElement);
  }
}

//Poisk Inputov, knopki / disable knopki /obrabotchik na inputi
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

//Poisk form i veshaem obrabotchik
function enableValidation() {
  const formList = document.querySelectorAll(".popup__form");
  [...formList].forEach(function (formElement) {
    setEventListener(formElement);
  });
}

enableValidation();

