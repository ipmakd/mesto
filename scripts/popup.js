export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
  }
  open() {
    this._popup.classList.add("popup_opened");
    this.addEventListener("keydown", this._handleEscClose(evt));
  }
  close() {
    this._popup.classList.remove("popup_opened");
    this.removeEventListener("keydown", this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._popup.close;
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this._popup.close;
      }
    });
  }
}
// Создайте класс Popup
// Создайте класс Popup, который отвечает за открытие и закрытие попапа.
// Этот класс: Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
// Модальное окно также закрывается при клике на затемнённую область вокруг формы.
