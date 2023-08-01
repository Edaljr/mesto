const editFormElement = document.querySelector('form[name="editForm"]');
const addFormElement = document.querySelector('form[name="addForm"]');
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const inputNameFormAddNewCard = document.querySelector('input[name="title"]');
const inputLinkFormAddNewCard = document.querySelector('input[name="link"]');
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
const closeBtnPreview = previewPopup.querySelector(".popup__close-btn");
const closeBtnAdd = popupAdd.querySelector(".popup__close-btn");
const closeBtnEdit = popupEdit.querySelector(".popup__close-btn");
const popupSaveAddBtn = popupAdd.querySelector(".popup__btn-add");

const config ={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
}

export {
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
};
