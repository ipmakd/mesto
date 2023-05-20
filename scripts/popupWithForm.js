import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
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
    });
  }
}

// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners.
// Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

// класс PopupWithForm:

// наследуется от Popup, вызывает его конструктор, в который передает нужный параметр.
// При этом принимает еще и второй параметр - колбэк сабмита формы.
// Создаем два экземпляра этого класса, в каждый передаем свой коллебек (помимо селектора попапа).
//  В одном случае форма редактирует данные пользователя на странице, во втором - добавляет новую карточку.
//   В качестве идеи - попробуйте совместить функцию коллбека при сабмите формы добавления карточки
//    с аргументом renderer у класса Section
