

//pokazat' text oshibki
function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

//spryatat' text oshibki
function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

//proverka Validnosti inputov
function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!isInputValid) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
}

//function knopki disabled
function disabledButton(buttonElement,config) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add(config.inactiveButtonClass);
}
//function knopki enabled
function enabledButton(buttonElement,config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

//Sostoyanie knopki disabled/enabled
function toogleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disabledButton(buttonElement, config);
  } else {
    enabledButton(buttonElement, config);
  }
}

//Poisk Inputov, knopki / disable knopki /obrabotchik na inputi
function setEventListener(formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);
  [...inputList].forEach(function (inputElement) {
    inputElement.addEventListener("input", function () {
      toogleButtonState(submitButtonElement, formElement.checkValidity(), config);
      checkInputValidity(inputElement, formElement, config);
    });
  });
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;
  });
}

//Poisk form i veshaem obrabotchik
function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  [...formList].forEach(function (formElement) {
    setEventListener(formElement, config);
  });
}

enableValidation(config);


