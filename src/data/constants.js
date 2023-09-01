const editFormElement = document.querySelector('form[name="editForm"]');
const addFormElement = document.querySelector('form[name="addForm"]');
const avatarFormElement = document.querySelector('form[name="avatarForm"]');
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileAddBtn = document.querySelector(".profile__add-btn");
const popupAdd = document.querySelector(".popup_add");
const popupEdit = document.querySelector(".popup_edit");
const cardsContainer = document.querySelector(".cards__container");
const card = document.querySelector("#card").content;
const previewPopup = document.querySelector(".popup_image-scale");
const imageElement = document.querySelector(".popup__image");
const previewPopupSubtitle = document.querySelector(".popup__subtitle");
const profileAvatar = document.querySelector(".profile__avatar-container");
const profileAvatarImg = document.querySelector(".profile__avatar");

const deletePopup = document.querySelector(".popup_delete-card");
const popupAvatarEdit = document.querySelector(".popup_avatar-edit");
const submitProfileBtn = document.querySelector(".popup__btn-edit");
const submitNewCard = document.querySelector(".popup__btn-add");
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

export const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: '80410e6a-9e5f-40d8-a711-b4a6114184cb',
    'Content-Type': 'application/json'
  }}


export {
  config,
  editFormElement,
  addFormElement,
  nameInput,
  jobInput,
  popupAdd,
  popupEdit,
  profileTitle,
  profileSubtitle,
  profileEditBtn,
  profileAddBtn,
  cardsContainer,
  card,
  imageElement,
  previewPopupSubtitle,
  previewPopup,
  deletePopup,
  profileAvatar,
  popupAvatarEdit,
  profileAvatarImg,
  submitProfileBtn,
  submitNewCard,
  avatarFormElement
};
