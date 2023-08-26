import "../pages/index.css";
import { initialCards } from "../data/initialCards.js";
import {
  addFormElement,
  card,
  cardsContainer,
  config,
  editFormElement,
  imageElement,
  jobInput,
  nameInput,
  popupAdd,
  popupEdit,
  previewPopup,
  previewPopupSubtitle,
  profileAddBtn,
  profileEditBtn,
  profileSubtitle,
  profileTitle,
} from "../data/constants.js";
import { Card } from "../script/Card.js";
import { FormValidator } from "../script/FormValidator.js";
import { Section } from "../script/Section.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo";
import { PopupWithImage } from "../script/PopupWithImage";


const cardsSection = new Section(
  {
    items: initialCards,
    render: (cardItem) => {
      const newCard = createCard(cardItem);
      cardsSection.addItem(newCard);
    },
  },
  cardsContainer
);


const addCardFormValidation = new FormValidator(config, addFormElement);

const editCardFormValidation = new FormValidator(config, editFormElement);

const popupEditForm = new PopupWithForm(
  popupEdit,
  handleSubmitEdit,
  editFormElement
);

const popupAddForm = new PopupWithForm(
  popupAdd,
  handleAddFormSubmit,
  addFormElement
);

const popupPreviewPopup = new PopupWithImage(previewPopup);

popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupPreviewPopup.setEventListeners();
addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
addCardFormValidation.disabledButton();
cardsSection.renderCards();


const userInfo = new UserInfo({
  nameElement: profileTitle,
  jobElement: profileSubtitle,
}
);

function handleAddFormSubmit(value) {
  const newCard = createCard({
    link: value.link,
    name: value.title,
  });
  cardsSection.addItem(newCard);
  popupAddForm.onPopupOpen();

}

function handlePreviewImage(value) {
  popupPreviewPopup.onPopupOpen(
    { imgLink: value.link, name: value.name },
    { image: imageElement, subtitle: previewPopupSubtitle }
  );

}

function handleSubmitEdit(value) {
  userInfo.setUserInfo(value);
  setEditFormTextValue(value);
  popupEditForm.onPopupClose();
}

function setEditFormTextValue(values) {
  nameInput.value = values.name;
  jobInput.value = values.job;
}


const createCard = (item) => {
  const newCard = new Card(
    {
      imgLink: item.link,
      name: item.name,
    },
    card,
    () => handlePreviewImage(item)
  );
  return newCard.generateCard();
};

profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  addCardFormValidation.resetValidation();
  popupAddForm.onPopupOpen();
  addCardFormValidation.disabledButton();
});

profileEditBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  editCardFormValidation.resetValidation();
  popupEditForm.onPopupOpen();
  const userInfoObject = userInfo.getUserInfo();
  setEditFormTextValue(userInfoObject);
});
