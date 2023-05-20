import { initialCards, validationConfig } from "./constants.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import Section from "./section.js";
import PopupWithImage from "./popupWithImage.js";
import Popup from "./popup.js";
import UserInfo from "./userInfo.js";

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupFormUserEditOpen = document.querySelector(".popup_form_user-edit");
const nameInput = popupFormUserEditOpen.querySelector(
  ".popup__input_type_name"
);
const jobInput = popupFormUserEditOpen.querySelector(".popup__input_type_job");
const popupFormUserEdit = popupFormUserEditOpen.querySelector(
  ".popup__form_type_user-edit"
);
const userEditButton = document.querySelector(".profile__edit-button");
const popupFormNewItem = document.querySelector(".popup__form_type_new-item");
const popupAddImageForm = document.querySelector(".popup_new-item-form");
const imageGridList = document.querySelector(".photo-grid__list");
const imageAddButton = document.querySelector(".profile__add-button");
const inputLinkFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-link"
);
const inputTitleFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-place"
);

function editUserData() {
  const popupFormUserEditOpened = new Popup(".popup_form_user-edit");
  popupFormUserEditOpened.open();
  popupFormUserEditOpened.setEventListeners();
  formUserEditValidation.resetValidationState();
  const userInfoValue = new UserInfo(
    ".popup__input_type_name",
    ".popup__input_type_job"
  );
  userInfoValue.getUserInfo();
  popupFormUserEdit.addEventListener("submit", (evt) => {
    evt.preventDefault();
    userInfoValue.setUserInfo();
    popupFormUserEditOpened.close();
  });
}
// открытие попапа редактирования профиля по кнопке userEditButton
userEditButton.addEventListener("click", editUserData);

// function handleFormUserEditSubmit(evt) {
//   evt.preventDefault();
//   const userInfoValue = new UserInfo(
//     ".popup__input_type_name",
//     ".popup__input_type_job"
//   );
//   userInfoValue.setUserInfo();
//   // profileName.textContent = nameInput.value;
//   // profileJob.textContent = jobInput.value;
//   popupFormUserEditOpened.close();
// }
// popupFormUserEdit.addEventListener("submit", handleFormUserEditSubmit);

//
//
//
//
//
//
//

imageAddButton.addEventListener("click", () => {
  const popupFormAddImage = new Popup(".popup_new-item-form");
  popupFormAddImage.open();
  popupFormAddImage.setEventListeners();
  // openPopup(popupAddImageForm);
  popupAddImageFormValidation.resetValidationState();
  popupFormNewItem.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemValue = {
      name: inputTitleFormAddNewCard.value,
      link: inputLinkFormAddNewCard.value,
    };

    createCard(itemValue);
    popupFormAddImage.close();
  });
});

// //Создание нового элемента
// function handleFormNewItemSubmit(event) {
//   event.preventDefault();
//   const itemValue = {
//     name: inputTitleFormAddNewCard.value,
//     link: inputLinkFormAddNewCard.value,
//   };

//   createCard(itemValue);
//   closePopup(popupAddImageForm);
// }
// popupFormNewItem.addEventListener("submit", handleFormNewItemSubmit);

// Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick.
// Эта функция должна открывать попап с картинкой при клике на карточку.

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
