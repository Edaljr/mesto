import {Api} from "../script/Api.js";
import "../pages/index.css";
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
  configApi,
  deletePopup,
  profileAvatar,
  popupAvatarEdit,
  profileAvatarImg,
  submitProfileBtn,
  submitNewCard,
  avatarFormElement
} from "../data/constants.js";
import {Card} from "../script/Card.js";
import {FormValidator} from "../script/FormValidator.js";
import {Section} from "../script/Section.js";
import {PopupWithForm} from "../script/PopupWithForm.js";
import {UserInfo} from "../script/UserInfo";
import {PopupWithImage} from "../script/PopupWithImage";
import {PopupWithAvatar} from "../script/PopupWithAvatar.js";
import {PopupConfirmDelete} from "../script/PopupConfirmDelete";

const api = new Api(configApi);

const userInfo = new UserInfo({
  nameElement: profileTitle,
  jobElement: profileSubtitle,
});


let userId = null;

const cardsSection = new Section({}, cardsContainer);

const addCardFormValidation = new FormValidator(config, addFormElement);
const editCardFormValidation = new FormValidator(config, editFormElement);
const avatarFormValidation = new FormValidator(config, avatarFormElement);

const popupEditForm = new PopupWithForm(
  popupEdit,
  handleSubmitEdit,
  editFormElement,
  submitProfileBtn
);

const popupAddForm = new PopupWithForm(
  popupAdd,
  handleAddFormSubmit,
  addFormElement,
  submitNewCard,
);

const popupPreviewPopup = new PopupWithImage(previewPopup);
const popupAvatar = new PopupWithAvatar(popupAvatarEdit, handleChangeAvatar);
const popupDeleteConfirm = new PopupConfirmDelete(deletePopup, handleCardDelete);

popupAvatar.setEventListeners();
popupEditForm.setEventListeners();
popupAddForm.setEventListeners();
popupPreviewPopup.setEventListeners();

addCardFormValidation.enableValidation();
editCardFormValidation.enableValidation();
avatarFormValidation.enableValidation();

function handleAddFormSubmit(value) {
  popupAddForm.onPopupOpen();
  api.addNewCard({name: value.title, link: value.link}).then((res) => {

    const newCardData = {
      ...res,
      name: value.title,
      link: value.link,
    }

    const newCard = createCard(newCardData)
    cardsSection.addItem(newCard, "prepend");
  }).catch(err => console.log(err));
}

function handlePreviewImage(value) {
  popupPreviewPopup.onPopupOpen(
    {imgLink: value.link, name: value.name},
    {image: imageElement, subtitle: previewPopupSubtitle}
  );
}

function handleSubmitEdit(value) {
  userInfo.setUserInfo(value);
  setEditFormTextValue(value);
  api.editUsersProfile({name: value.name, about: value.job});
}

function handleCardDelete(cardId) {
  api.deleteCard(cardId);
}

function handleChangeAvatar(imgLink) {
  api.changeAvatarImg({avatar: imgLink}).then(res => {
    profileAvatarImg.src = res.avatar;
    popupAvatar.onPopupClose();
  }).catch(err => console.log(err));
}

function submitLike(cardId, cardItem) {
  api.addLike(cardId).then((res) => cardItem.setLikesCount(res.likes)).catch(err => console.log(err))
}

function submitDeleteLike(cardId, cardItem) {
  api.removeLike(cardId).then((res) => cardItem.setLikesCount(res.likes)).catch(err => console.log(err))
}

function setEditFormTextValue(values) {
  nameInput.value = values.name;
  jobInput.value = values.job;
}

function createCard(item) {
  const newCard = new Card(
    {
      imgLink: item.link,
      name: item.name,
      likes: item.likes ?? [],
      itemCardId: item._id,
      cardOwnerId: item.owner ? item.owner._id : userId,
      userId
    },
    card,
    popupDeleteConfirm,
    () => handlePreviewImage(item),
    submitLike,
    submitDeleteLike
  );
  return newCard.generateCard();
}

profileAvatar.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupAvatar.onPopupOpen();
  avatarFormValidation.resetValidation();
  avatarFormValidation.disabledButton()
});

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

api.getUser().then((userData) => {
  const {name, about, _id, avatar} = userData;
  userId = _id
  userInfo.setUserInfo({name: name, job: about});
  profileAvatarImg.src = avatar;
}).catch(err => console.log(err));

api.getInitialCards().then((cards) => {
  cards.forEach((card) => {
    const newCard = createCard(card);
    cardsSection.addItem(newCard, 'append');
  });
}).catch(err => console.log(err));


