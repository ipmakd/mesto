import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, callback) {
    super(selectorPopup);
    this._callback = callback;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  close() {
    this._popup.classList.remove("popup_opened");
    console.log(this._popup);
    console.log(this._popupForm);
    debugger;
    this._popupForm.reset();
  }

  // _getInputValues() {}

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback();
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
    this._handleEscClose();
  }
}
