import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, link, name) {
    super(selectorPopup);
    this._popupFullScreenImage = this._popup.querySelector(
      ".popup__fullscreen-image"
    );
    this._link = link;
    this._name = name;
    this._popupFullScreenCapture =
      this._popup.querySelector(".popup__figcaption");
  }
  open() {
    this._popup.classList.add("popup_opened");
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    popupFullscreenImageCaption.textContent = this._name;
    this.addEventListener("keydown", this._handleEscClose(evt));
  }
}
// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open.
//  В методе open класса PopupWithImage нужно вставлять в попап картинку
//  с src изображения и подписью к картинке.
//  _popupFullScreenImage() {
//   openPopup(popupImageContainerOpen);
//   popupFullscreenImage.src = this._link;
//   popupFullscreenImage.alt = this._name;
//   popupFullscreenImageCaption.textContent = this._name;

//   );
//   const popupFullscreenImageCaption =
//   popupImageContainerOpen.querySelector(".popup__figcaption");
//   const popupFullscreenImage = popupImageContainerOpen.querySelector(
//     ".popup__fullscreen-image"
//   );
