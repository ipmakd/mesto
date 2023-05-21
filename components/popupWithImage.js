import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, link, name) {
    super(selectorPopup);
    this._popupFullScreenImage = this._popup.querySelector(
      ".popup__fullscreen-image"
    );
    this._popupFullScreenCapture =
      this._popup.querySelector(".popup__figcaption");
    this._link = link;
    this._name = name;
  }
  open() {
    this._popup.classList.add("popup_opened");
    this._popupFullScreenImage.src = this._link;
    this._popupFullScreenImage.alt = this._name;
    this._popupFullScreenCapture.textContent = this._name;
  }
}
