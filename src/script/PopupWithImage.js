import { imageElement, previewPopupSubtitle } from "../data/constants.js";
import { Popup } from "../script/Popup.js";

export class PopupWithImage extends Popup {
  constructor() {
    this._popupSelector = super._popup;
  }

  onPopupOpen(imgLink, name) {
    imageElement.src = imgLink;
    imageElement.alt = `Изображение ${name}`;
    previewPopupSubtitle.textContent = name;
  }
}
