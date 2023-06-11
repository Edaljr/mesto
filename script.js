let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let popup = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let clickLike = document.querySelector('.cards__like')

function onPopupOpen () {
  popup.classList.add('popup__opened');
  nameInput.value= profileTitle.textContent.trim();
  jobInput.value= profileSubtitle.textContent.trim();
}
function onPopupClose() {
  popup.classList.remove('popup__opened');
}
function setTextValue() {
  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = jobInput.value
}

function handleFormSubmit (evt) {
  setTextValue();
}

function clickLikeActive (){
  clickLike.classList.add('cards__like-active');
}
function setClickLikeDisable (){
  clickLike.classList.remove('cards__like-active');
}
clickLike.addEventListener('click', function () {
});


formElement.addEventListener('submit', handleFormSubmit);

