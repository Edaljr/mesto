import { initialCards } from "../data/initialCards.js";
import {
  config,
  editFormElement,
  addFormElement,
  nameInput,
  jobInput,
  popupAdd,
  popupEdit,
  inputNameFormAddNewCard,
  inputLinkFormAddNewCard,
  profileTitle,
  profileSubtitle,
  profileEditBtn,
  profileAddBtn,
  cardsContainer,
  card,
  imageElement,
  previewPopupSubtitle,
  previewPopup,
  closeBtnPreview,
  closeBtnAdd,
  closeBtnEdit,
  popupSaveAddBtn,
} from "../data/constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

  const addCardFormValidation = new FormValidator(config, addFormElement)
  const editCardFormValidation = new FormValidator(config, editFormElement)
  addCardFormValidation.enableValidation();
  editCardFormValidation.enableValidation();
  addCardFormValidation.disabledButton();


window.addEventListener("load", (event) => {
  initialCards.forEach((cardItem) => {
    const newCard = new Card(
      {
        imgLink: cardItem.link,
        name: cardItem.name,
      },
      card
    );
    newCard.generateCard();
    renderCard(newCard.generateCard(), cardsContainer);
  });
});



//Render Cards
const renderCard = (card, wrap) => {
  wrap.prepend(card);
};

export const onPopupOpen = (modalWindow) => {
  modalWindow.classList.add("popup_opened");
  keyHandler();

};

// Popup close
const onPopupClose = (modalWindow) => {
  modalWindow.classList.remove("popup_opened");
  addCardFormValidation.resetValidation();
  editCardFormValidation.resetValidation();
};

function setEditFormTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
}

//Submit Form
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  onPopupClose(popupEdit);
};

const keyHandler = () => {
  document.addEventListener("keydown", keyDownHandler, true);
};

const keyDownHandler = (evt) => {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    openedPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", keyDownHandler, true);
  }
};

//submit add cards
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = new Card(
    {
      imgLink: inputLinkFormAddNewCard.value,
      name: inputNameFormAddNewCard.value,
    },
    card
  );
  newCard.generateCard();
  renderCard(newCard.generateCard(), cardsContainer);
  document.removeEventListener("keydown", keyDownHandler, true);
  onPopupClose(popupAdd);

};

editFormElement.addEventListener("submit", handleEditFormSubmit);

// Click close Overlay i popup
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close-btn")
    ) {
      onPopupClose(popup);
    }
  });
});

addFormElement.addEventListener("submit", handleAddFormSubmit);

profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(popupAdd);
  addCardFormValidation.disabledButton();
  addFormElement.reset();
});

profileEditBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(popupEdit);
  setEditFormTextValue();
});
