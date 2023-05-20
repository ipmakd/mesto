import { initialCards, validationConfig } from "./constants.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import Section from "./section.js";
import PopupWithImage from "./popupWithImage.js";
import UserInfo from "./userInfo.js";
import PopupWithForm from "./popupWithForm.js";

const userEditButton = document.querySelector(".profile__edit-button");
const imageGridList = document.querySelector(".photo-grid__list");
const imageAddButton = document.querySelector(".profile__add-button");
const inputLinkFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-link"
);
const inputTitleFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-place"
);
const userInfoValue = new UserInfo(
  ".popup__input_type_name",
  ".popup__input_type_job"
);

function editUserData() {
  const popupFormUserEditOpened = new PopupWithForm(
    ".popup_form_user-edit",
    handleFormUserEdit
  );
  popupFormUserEditOpened.open();

  formUserEditValidation.resetValidationState();
  const userInfoValue = new UserInfo(
    ".popup__input_type_name",
    ".popup__input_type_job"
  );
  userInfoValue.getUserInfo();
  popupFormUserEditOpened.setEventListeners();
}
userEditButton.addEventListener("click", editUserData);

function handleFormUserEdit() {
  userInfoValue.setUserInfo();
}

imageAddButton.addEventListener("click", () => {
  const popupFormAddImage = new PopupWithForm(
    ".popup_new-item-form",
    handleFormAddImageSubmit
  );
  popupFormAddImage.open();
  popupFormAddImage.setEventListeners();
  popupAddImageFormValidation.resetValidationState();
});

function handleFormAddImageSubmit() {
  const itemValue = {
    name: inputTitleFormAddNewCard.value,
    link: inputLinkFormAddNewCard.value,
  };
  createCard(itemValue);
}

function handleCardClick() {
  const popupFullscreenImageOpened = new PopupWithImage(
    ".popup_image",
    this._link,
    this._name
  );
  popupFullscreenImageOpened.open();
  popupFullscreenImageOpened.setEventListeners();
}

const renderImageElement = (itemElement) => {
  imageGridList.prepend(itemElement);
};

function createCard(data) {
  const card = new Card(data, "#photo-grid__item", handleCardClick);
  const cardElement = card.generateCard();
  renderImageElement(cardElement);
}

// класс Section
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#photo-grid__item", handleCardClick);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".photo-grid__list"
);
cardList.renderItems();

// Валидация
const formUserEdit = document.querySelector(".popup__form_type_user-edit");
const formUserEditValidation = new FormValidator(
  validationConfig,
  formUserEdit
);
formUserEditValidation.enableValidations();

const popupAddImageForms = document.querySelector(".popup_new-item-form");
const popupAddImageFormValidation = new FormValidator(
  validationConfig,
  popupAddImageForms
);
popupAddImageFormValidation.enableValidations();
