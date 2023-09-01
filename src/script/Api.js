export class Api {
  constructor(config) {
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-73/cards", {
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUser() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-73/users/me", {
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editUsersProfile(body) {
    fetch("https://mesto.nomoreparties.co/v1/cohort-73/users/me", {
      method: "PATCH",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  addNewCard(body) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-73/cards", {
      method: "POST",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };


  deleteCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-73/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
    });
  }

  addLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-73/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  removeLike(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-73/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  changeAvatarImg(body) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-73/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: "80410e6a-9e5f-40d8-a711-b4a6114184cb",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };
}






