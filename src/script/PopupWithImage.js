import { Popup } from "../script/Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  onPopupOpen(data, selectors) {
    selectors.image.src = data.imgLink;
    selectors.image.alt = `Изображение ${data.name}`;
    selectors.subtitle.textContent = data.name;
    super.onPopupOpen();
  }
}
