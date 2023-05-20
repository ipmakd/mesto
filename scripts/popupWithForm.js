import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    // this._name = itemValue.name;
    // this._description = itemValue.description;
    // this._link = itemValue.link;
    this.profileName = document.querySelector(".profile__name");
    this.profileJob = document.querySelector(".profile__job");
  }

  close() {}

  _getInputValues() {}

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
    this._handleEscClose();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log(this.profileJob);
      console.log(this._name);
      this.profileName.textContent = this._name;
      this.profileJob.textContent = this._description;
      this.close();
    });
  }
}

// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners.
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
