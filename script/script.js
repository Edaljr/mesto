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
const popupSaveAddBtn = popupAdd.querySelector('.popup__btn-add')


//Create Card
const createCard = (name, imgLink) => {
  const cardElement = card.querySelector(".cards__item").cloneNode(true);
  cardElement.querySelector(".cards__photo").src = imgLink;
  cardElement.querySelector(".cards__title").textContent = name;
  cardElement.querySelector(".cards__photo").alt = name;
  const likeButton = cardElement.querySelector(".cards__like");
  const deleteButton = cardElement.querySelector(".cards__btn-remove");
  const cardImage = cardElement.querySelector(".cards__photo");
  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  cardImage.addEventListener("click", () => handlePreviewImage(imgLink, name));
  likeButton.addEventListener("click", (evt) => {
    handleLikeIcon(evt);
  });
  return cardElement;
};

//Obrabotchik knopki like
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("cards__like-active");
};

//Render Cartochek
const renderCard = (card, wrap) => {
  wrap.prepend(card);
};

//Ydalenie Cartochek
const deleteCard = (card) => {
  card.remove();
};

//Popup open
const onPopupOpen = (modalWindow) => {
  modalWindow.classList.add("popup_opened");
};

//Popup close
const onPopupClose = (modalWindow) => {
  modalWindow.classList.remove("popup_opened");
};

function setEditFormTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
}

function setCardsTextValue() {
  inputNameFormAddNewCard.value = inputNameFormAddNewCard.textContent;
  inputLinkFormAddNewCard.value = inputLinkFormAddNewCard.textContent;
}

//download cards ,delete button
window.addEventListener("load", (event) => {
  for (let card = 0; card < initialCards.length; card++) {
    const newCard = createCard(
      initialCards[card].name,
      initialCards[card].link
    );
    renderCard(newCard, cardsContainer);
  }
});

//Submit Form
const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  onPopupClose(popupEdit);
};

//submit dobavleniya cards
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = createCard(
    inputNameFormAddNewCard.value,
    inputLinkFormAddNewCard.value
  );
  renderCard(newCard, cardsContainer);
  onPopupClose(popupAdd);
};

const handlePreviewImage = (imgLink, name) => {
  imageElement.src = imgLink;
  imageElement.alt = `Изображение ${name}`;
  previewPopupSubtitle.textContent = name;
  onPopupOpen(previewPopup);
};

profileEditBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(popupEdit);
  setEditFormTextValue();
});

editFormElement.addEventListener("submit", handleEditFormSubmit);

// popupAdd.addEventListener('keypress', function() {
//   onPopupClose(popupAdd)
//   console.log(111);
// });


// function keyHandler(evt) {
//   if (evt.key === "escape") {
//     onPopupClose(popupAdd);
//   }
// }
// popupAdd.addEventListener("keypress", keyHandler);


addFormElement.addEventListener("submit", handleAddFormSubmit);

profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(popupAdd);
  setCardsTextValue();
  disabledButton(popupSaveAddBtn);
});

closeBtnPreview.addEventListener("click", () => onPopupClose(previewPopup));
closeBtnAdd.addEventListener("click", () => onPopupClose(popupAdd));
closeBtnEdit.addEventListener("click", () => onPopupClose(popupEdit));

