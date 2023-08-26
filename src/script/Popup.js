export class Popup {
  constructor(selectorPopup) {
    this._popup = selectorPopup;
  }

  onPopupOpen() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._keyDownHandler, true);
  }

  onPopupClose() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._keyDownHandler, true);
  }

  _keyDownHandler = (evt) => {
    if (evt.key === "Escape") {
      this.onPopupClose();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target === evt.currentTarget ||
        evt.target.classList.contains("popup__close-btn")
      ) {
        this.onPopupClose();
      }
    });
  }
}
