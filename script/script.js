
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
  keyHandler();
  // overlayClickHandler();
};

//Popup close
const onPopupClose = (modalWindow) => {
  modalWindow.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyDownHandler, true);
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

//Click otkritie Image
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

// Click zakritie Overlay i popupa
const popups = document.querySelectorAll('.popup'); //Ищем все попапы
popups.forEach((popup) => {
 popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn')){
    onPopupClose(popup);
  }
  console.log(111);
 });
});


//Keydown Esc zakritie popupov
function keyHandler() {
  document.addEventListener("keydown", keyDownHandler, true);
}
function keyDownHandler(evt) {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    onPopupClose(openedPopup);
  }
}

addFormElement.addEventListener("submit", handleAddFormSubmit);

profileAddBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  onPopupOpen(popupAdd);
  setCardsTextValue();
  disabledButton(popupSaveAddBtn, config);
});

