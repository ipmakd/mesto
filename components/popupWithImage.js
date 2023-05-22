import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupFullScreenImage = this._popup.querySelector(
      ".popup__fullscreen-image"
    );
    this._popupFullScreenCapture =
      this._popup.querySelector(".popup__figcaption");
    // this._link = link;
    // this._name = name;
  }
  open(link, name) {
    super.open();
    this._popupFullScreenImage.src = link;
    this._popupFullScreenImage.alt = name;
    this._popupFullScreenCapture.textContent = name;
  }
}
