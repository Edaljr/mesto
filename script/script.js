let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector('input[name="name"]');
let jobInput = document.querySelector('input[name="job"]');
let popup = document.querySelector(".popup");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let profileEditBtn = document.querySelector(".profile__edit-btn");
let popupCloseBtn = document.querySelector(".popup__close-btn");

function onPopupOpen() {
popup.classList.add("popup_opened");}
setTextValue()
function onPopupClose() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  onPopupClose();
}

function setTextValue() {
  nameInput.value = profileTitle.textContent.trim();
  jobInput.value = profileSubtitle.textContent.trim();
}

popupCloseBtn.addEventListener('click', function () {
  onPopupClose();
    });
profileEditBtn.addEventListener('click', function () {
  onPopupOpen();
    });
formElement.addEventListener("submit", handleFormSubmit);

// function clickLikeActive() {
//   let clickLike = document.querySelector(".cards__like");
//   if (clickLike.classList.contains("cards__like-active")) {
//     clickLike.classList.toggle("cards__like-active");
//   } else {
//     clickLike.classList.add("cards__like-active");
//   }
// }





// let formElement = document.querySelector(".popup__form");
// let nameInput = document.querySelector(".popup__input-name");
// let jobInput = document.querySelector(".popup__input-job");
// let popup = document.querySelector(".popup");
// let profileTitle = document.querySelector(".profile__title");
// let profileSubtitle = document.querySelector(".profile__subtitle");
// let profileEditBtn = document.querySelector(".profile__edit-btn")

// function onPopupOpen() {
//   popup.classList.add("popup__opened");
//   setTextValue();
// }

// function onPopupClose() {
//   popup.classList.remove("popup__opened");
// }

// function handleFormSubmit(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileSubtitle.textContent = jobInput.value;
//   onPopupClose();
// }

// function setTextValue() {
//   nameInput.value = profileTitle.textContent.trim();
//   jobInput.value = profileSubtitle.textContent.trim();
// }


// // function clickLikeActive() {
// //   let clickLike = document.querySelector(".cards__like");
// //   if (clickLike.classList.contains("cards__like-active")) {
// //     clickLike.classList.toggle("cards__like-active");
// //   } else {
// //     clickLike.classList.add("cards__like-active");
// //   }
// // }

// formElement.addEventListener("submit", handleFormSubmit);
