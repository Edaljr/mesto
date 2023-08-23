import "../pages/index.css";
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
} from "../data/constants.js";
import { Card } from "../script/Card.js";
import { FormValidator } from "../script/FormValidator.js";
import { Section } from "../script/Section.js";
import { Popup } from "../script/Popup.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo";


const cardsSection = new Section(
  {
    items: initialCards,
    render: (cardItem) => {
      const newCard = new Card(
        {
          imgLink: cardItem.link,
          name: cardItem.name,
        },
        card,
        handlePreviewImage
      );
      cardsSection.addItem(newCard.generateCard());
    },
  },
  cardsContainer
);

const popupAddClass = new Popup(popupAdd);

const popupEditClass = new Popup(popupEdit);

const popupPreviewClass = new Popup(previewPopup);

const addCardFormValidation = new FormValidator(config, addFormElement);

const editCardFormValidation = new FormValidator(config, editFormElement);

const popupEditForm = new PopupWithForm(
  popupEdit,
  handleSubmitEdit,
  editFormElement
);

const popupAddForm = new PopupWithForm(
  popupEdit,
  handleAddFormSubmit,
  addFormElement
);


addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
addCardFormValidation.disabledButton();
cardsSection.renderCards();

function handlePreviewImage() {
  popupPreviewClass.setEventListeners();
  imageElement.src = this._imgLink;
  imageElement.alt = `Изображение ${this._name}`;
  previewPopupSubtitle.textContent = this._name;
  popupPreviewClass.onPopupOpen();
}

function handleAddFormSubmit() {
  const newCard = new Card(
    {
      imgLink: inputLinkFormAddNewCard.value,
      name: inputNameFormAddNewCard.value,
    },
    card
  );
  newCard.generateCard();
  cardsSection.addItem(newCard.generateCard());
  popupAddClass.onPopupClose();
}

function handleSubmitEdit() {
  const userInfo = new UserInfo({
    nameElement: nameInput,
    jobElement: jobInput,
  });
  userInfo.setUserInfo(userInfo.getUserInfo());
  popupEditForm.onPopupClose();
}

function setEditFormTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
}

popupEditForm.setEventListeners();

popupAddForm.setEventListeners();

profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  addCardFormValidation.resetValidation();
  popupAddClass.onPopupOpen();
  popupAddClass.setEventListeners();
  addCardFormValidation.disabledButton();
  addFormElement.reset();
});

profileEditBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  editCardFormValidation.resetValidation();
  popupEditClass.onPopupOpen();
  popupEditClass.setEventListeners();
  setEditFormTextValue();
});
