let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let popup = document.querySelector('.popup');

function onPopupOpen () {
  popup.classList.add('popup__opened');
}

function onPopupClose() {
  popup.classList.remove('popup__opened');
}



// function handleFormSubmit (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// // formElement.addEventListener('submit', handleFormSubmit);
