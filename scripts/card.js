import {
  itemTemplate,
  popupFullscreenImage,
  popupFullscreenImageCaption,
  openPopup,
  popupImageContainerOpen,
} from "./index.js";

export default class Card {
  constructor(cardData) {
    this._link = cardData.link;
    this._alt = cardData.name;
    this._name = cardData.name;
  }
  _getTemplate() {
    const itemElement = itemTemplate.content
      .querySelector(".photo-grid__item")
      .cloneNode(true);
    return itemElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".photo-grid__image").src = this._link;
    this._element.querySelector(".photo-grid__image").alt = this._alt;
    this._element.querySelector(".photo-grid__title").textContent = this._name;
    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".photo-grid__like")
      .addEventListener("click", () => {
        this._handleMessageClick();
      });
    this._element
      .querySelector(".photo-grid__remove-item")
      .addEventListener("click", () => {
        this._deleteItem();
      });
    this._element
      .querySelector(".photo-grid__image")
      .addEventListener("click", () => {
        this._popupFullScreenImage();
      });
  }

  _handleMessageClick() {
    this._element
      .querySelector(".photo-grid__like")
      .classList.toggle("photo-grid__like_active");
  }

  _deleteItem() {
    this._element
      .querySelector(".photo-grid__remove-item")
      .closest(".photo-grid__item")
      .remove();
  }

  _popupFullScreenImage() {
    openPopup(popupImageContainerOpen);
    popupFullscreenImage.src = this._link;
    popupFullscreenImage.alt = this._name;
    popupFullscreenImageCaption.textContent = this._name;
  }
}
