import {initialCards} from '../data/initialCards.js';
import * as selector from '../data/constants.js';
import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';

window.addEventListener("load", (event) => {
  for (let card = 0; card < initialCards.length; card++) {
    const newCard = new Card(
      {
        imgLink:initialCards[card].link,
        name:initialCards[card].name,
      },
      selector.card

    );
    newCard.generateCard();
    renderCard(newCard.generateCard(), selector.cardsContainer)
  }

  const formList = document.querySelectorAll(selector.config.formSelector);
  [...formList].forEach(function (formElement) {
    const form = new FormValidator (
      selector.config,
      formElement
    )
    form.enableValidation()
  });

  document.addEventListener("keydown", keyDownHandler, true);
});

const keyDownHandler = (evt) => {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    openedPopup.classList.remove("popup_opened");
  }
}

//Render Cartochek
const renderCard = (card, wrap) => {
  wrap.prepend(card);
};

const onPopupOpen = (modalWindow) => {
  modalWindow.classList.add("popup_opened");
}

// Popup close
const onPopupClose = (modalWindow) => {
  modalWindow.classList.remove("popup_opened");
};

function setEditFormTextValue() {
  selector.nameInput.value = selector.profileTitle.textContent.trim();
  selector.jobInput.value = selector.profileSubtitle.textContent.trim();
}

function setCardsTextValue() {
  selector.inputNameFormAddNewCard.value = selector.inputNameFormAddNewCard.textContent;
  selector.inputLinkFormAddNewCard.value = selector.inputLinkFormAddNewCard.textContent;
}


//Submit Form
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  selector.profileTitle.textContent = selector.nameInput.value;
  selector.profileSubtitle.textContent = selector.jobInput.value;
  onPopupClose(selector.popupEdit);
};

//submit dobavleniya cards
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();

  const newCard = new Card(
    {
      imgLink: selector.inputLinkFormAddNewCard.value,
      name: selector.inputNameFormAddNewCard.value,
    },
    selector.card

  );
  newCard.generateCard();
  renderCard(newCard.generateCard(), selector.cardsContainer)
  onPopupClose(selector.popupAdd);
};



selector.profileEditBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(selector.popupEdit);
  setEditFormTextValue();
});

selector.editFormElement.addEventListener("submit", handleEditFormSubmit);

// Click zakritie Overlay i popupa
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
 popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn')){
    onPopupClose(popup);
  }
 });
});

const disabledButton = (buttonElement,config) => {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add(config.inactiveButtonClass);
}


selector.addFormElement.addEventListener("submit", handleAddFormSubmit);
selector.profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(selector.popupAdd);
  setCardsTextValue();
  disabledButton(selector.popupSaveAddBtn, selector.config);
});

