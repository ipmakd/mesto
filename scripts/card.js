export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._link = cardData.link;
    this._alt = cardData.name;
    this._name = cardData.name;
    this._template = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const itemElement = this._template.content
      .querySelector(".photo-grid__item")
      .cloneNode(true);
    return itemElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".photo-grid__image");
    this._buttonLike = this._element.querySelector(".photo-grid__like");
    this._setEventListeners();

    this._image.src = this._link;
    this._image.alt = this._alt;
    this._element.querySelector(".photo-grid__title").textContent = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleMessageClick();
    });
    this._element
      .querySelector(".photo-grid__remove-item")
      .addEventListener("click", () => {
        this._deleteItem();
      });
    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _handleMessageClick() {
    this._buttonLike.classList.toggle("photo-grid__like_active");
  }

  _deleteItem() {
    this._element.remove();
  }
}
