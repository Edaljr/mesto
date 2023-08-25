import "../pages/index.css";
import { initialCards } from "../data/initialCards.js";
import {
  addFormElement,
  card,
  cardsContainer,
  config,
  editFormElement,
  imageElement,
  inputLinkFormAddNewCard,
  inputNameFormAddNewCard,
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

function handleAddFormSubmit() {
  const newCard = createCard({
    link: inputLinkFormAddNewCard.value,
    name: inputNameFormAddNewCard.value,
  });
  cardsSection.addItem(newCard);
  popupAddForm.onPopupOpen();
}
function handlePreviewImage(item) {
  popupPreviewPopup.setEventListeners();
  popupPreviewPopup.onPopupOpen(
    { imgLink: item.link, name: item.name },
    { image: imageElement, subtitle: previewPopupSubtitle }
  );
}

function handleSubmitEdit() {
  const userInfo = new UserInfo({
    nameElement: nameInput,
    jobElement: jobInput,
  });
  userInfo.setUserInfo(
    { title: profileTitle, subTitle: profileSubtitle },
    userInfo.getUserInfo()
  );
  popupEditForm.onPopupClose();
}

function setEditFormTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
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
  setEditFormTextValue();
});
