const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
let cardCount = initialCards.length;
let editFormElement = document.querySelector("#editForm");
let addFormElement = document.querySelector("#addForm");
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="job"]');
let titleInput = document.querySelector('input[name="title"]');
let linkInput = document.querySelector('input[name="link"]');
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let profileAddBtn = document.querySelector(".profile__add-btn");
let popupAdd = document.querySelector(".popup_add");
let popupEdit = document.querySelector(".popup_edit");
let cardsContainer = document.querySelector(".cards__container");
let card = document.querySelector("#card").content;

//dobavleniya cards + prisaivanie id
const addCard = (name, link, cardId) => {
  const cardElement = card.querySelector(".cards__item").cloneNode(true);
  cardElement.querySelector(".cards__photo").src = link;
  cardElement.querySelector(".cards__title").textContent = name;
  cardElement.setAttribute("id", cardId);
  cardsContainer.prepend(cardElement);
  let newCard = document.getElementById(cardId);
  newCard.addEventListener("click", (evt) => {
    evt.preventDefault();
    showImagePopup(evt.target.parentElement.id);
  });

  //popup image
  const showImagePopup = (id) => {
    const selectedCard = document.getElementById(id);
    const photoElementSrc =
      selectedCard.getElementsByClassName("cards__photo")[0].src;
    const elementTitle =
      selectedCard.querySelector(".cards__title").textContent;
    const photoPopup = document.querySelector(".popup_image-scale");
    photoPopup.getElementsByClassName("popup__image")[0].src = photoElementSrc;
    const subtitlePopup = document.querySelector(".popup__subtitle");
    subtitlePopup.textContent = elementTitle;
    photoPopup.classList.add("popup_opened");
    const closeBtn = photoPopup.getElementsByClassName("popup__close-btn")[0];
    closeBtn.addEventListener("click", () => {
      photoPopup.getElementsByClassName("popup__image")[0].src = "";
      onPopupClose(photoPopup.getElementsByClassName("popup__image")[0]);
    });
  };

  //remove cards
  const cardsRemoveBtn = document.querySelector(".cards__btn-remove");
  cardsRemoveBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    cardElement.remove();
    cardCount--;
  });

  //Dobavleniya cards , like
  cardElement.querySelector(".cards__like").addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.target.classList.toggle("cards__like-active");
  });
};

//download cards ,delete button
window.addEventListener("load", (event) => {
  for (let card = 0; card < initialCards.length; card++) {
    addCard(initialCards[card].name, initialCards[card].link, card);
    let cardEl = document.getElementById(card);
    const cardsRemoveBtn = document.querySelector(".cards__btn-remove");
    cardsRemoveBtn.addEventListener("click", (evt) => {
      cardEl.remove();
      cardCount--;
    });
  }
});

//popup open
const onPopupOpen = (popupName) => {
  let closeBtn = null;
  if (popupName === "add") {
    popupAdd.classList.add("popup_opened");
    closeBtn = popupAdd.getElementsByClassName("popup__close-btn")[0];
  } else {
    popupEdit.classList.add("popup_opened");
    closeBtn = popupEdit.getElementsByClassName("popup__close-btn")[0];
  }
  closeBtn.addEventListener("click", (evt) => {
    onPopupClose();
  });
};

//Popup close
function onPopupClose() {
  const popupOpened = document.querySelector(".popup_opened");
  if (popupOpened) {
    popupOpened.classList.remove("popup_opened");
  }
}

//submit form
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  onPopupClose();
};

function setTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
}

function setCardsTextValue() {
  if ((titleInput.value = titleInput.textContent)) {
    titleInput.placeholder = "Название";
  }

  if ((linkInput.value = linkInput.textContent)) {
    linkInput.placeholder = "Ссылка на картинку";
  }
}

//submit dobavleniya cards
const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  addCard(titleInput.value, linkInput.value, cardCount);
  cardCount++;
  onPopupClose();
};

profileEditBtn.addEventListener("click", function () {
  onPopupOpen();
  setTextValue();
});

editFormElement.addEventListener("submit", handleFormSubmit);
addFormElement.addEventListener("submit", handleAddFormSubmit);
profileAddBtn.addEventListener("click", function () {
  onPopupOpen("add");
  setCardsTextValue();
});
