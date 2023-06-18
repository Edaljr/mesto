let editFormElement = document.querySelector("#editForm");
let addFormElement = document.querySelector("#addForm");
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="job"]');
let titleInput = document.querySelector('input[name="title"]');
let linkInput = document.querySelector('input[name="link"]');
let popup = document.querySelector(".popup");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let popupEditCloseBtn = document.querySelector("#edit");
let popupAddCloseBtn = document.querySelector("#add");
let popupAddBtn = document.querySelector(".profile__add-btn");
let popupAdd = document.querySelector(".popup__add-btn");
let cardsContainer = document.querySelector(".cards__container");
let card = document.querySelector("#card").content;
// const cardsLike = document.querySelector('.card__like')

// cardsContainer.querySelector('.card__like').addEventListener('click', function (evt) {
//   evt.target.classList.toggle('card__like-active');
// });
// // const cardsLike = document.querySelector(".cards__like");
// function clickLikeActive() {
//   if (cardsLike.classList.contains("cards__like")) {
//     clickLike.classList.toggle("cards__like-active");
//   } else {
//     clickLike.classList.add("cards__like-active");
//     }
//   }

// function likeBtn () {
// cardsLike.classList.remove("cards__like-active");
// }

// cardsLike.addEventListener("click", function () {
// likeBtn()
// });

window.addEventListener("load", (event) => {
  for (let card = 0; card < initialCards.length; card++) {
    addCard(initialCards[card].name, initialCards[card].link, card);
    // let cardEl = document.getElementById(card);
    // cardEl.addEventListener("click", (evt) => {
    //   cardEl.remove();
    }})


  let cardsRemoveBtn = document.querySelector(".cards__btn-remove");
  // cardsRemoveBtn.addEventListener("click", (evt) => {
  //   evt.remove();
  // });
// });

function onPopupOpen(popupName) {
  if (popupName === "edit" && "add") {
    popup.classList.add("popup_opened");
  } else {
    popupAdd.classList.add("popup_opened");
  }
} //popup open

function onPopupClose(popupName) {
  if (popupName === "edit" && "add") {
    popup.classList.remove("popup_opened");
  } else {
    popupAdd.classList.remove("popup_opened");
  }
} //popup close

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  onPopupClose("edit");
}; //submit formi

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  addCard(titleInput.value, linkInput.value);
  onPopupClose();
}; //submit dobavleniya cards

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

const addCard = (name, link, cardId) => {
  const cardElement = card.querySelector(".cards__item").cloneNode(true);
  cardElement.querySelector(".cards__photo").src = link;
  cardElement.querySelector(".cards__title").textContent = name;
  cardElement.setAttribute("id", cardId);
  cardsContainer.append(cardElement);
};

popupEditCloseBtn.addEventListener("click", () => {
  onPopupClose("edit");
});
popupAddCloseBtn.addEventListener("click", function () {
  onPopupClose("add");
});
profileEditBtn.addEventListener("click", function () {
  onPopupOpen("edit");
  setTextValue();
});

editFormElement.addEventListener("submit", handleFormSubmit);

editFormElement.addEventListener("submit", handleFormSubmit);

addFormElement.addEventListener("submit", handleAddFormSubmit);
popupAddBtn.addEventListener("click", function () {
  onPopupOpen("add");
  setCardsTextValue();
});


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

