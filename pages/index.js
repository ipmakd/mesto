import { initialCards, validationConfig } from "../components/constants.js";
import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import UserInfo from "../components/userInfo.js";
import PopupWithForm from "../components/popupWithForm.js";
// import "./index.css";
const userEditButton = document.querySelector(".profile__edit-button");
const imageAddButton = document.querySelector(".profile__add-button");

const userInfoValue = new UserInfo(".profile__name", ".profile__job");

const popupFormUserEditOpened = new PopupWithForm(
  ".popup_form_user-edit",
  handleFormUserEdit
);
popupFormUserEditOpened.setEventListeners();

// Слушатель на кнопку формы редактирования профиля
userEditButton.addEventListener("click", () => {
  popupFormUserEditOpened.open();
  formUserEditValidation.resetValidationState();
});

//колбек для формы редактирования профиля
function handleFormUserEdit(data) {
  const userDataValue = {
    userName: data.profileNameValue,
    userInfo: data.profileInfoValue,
  };
  userInfoValue.setUserInfo(userDataValue);
}

const popupFormAddImage = new PopupWithForm(
  ".popup_new-item-form",
  handleFormAddImageSubmit
);
popupFormAddImage.setEventListeners();

// Слушатель на кнопку формы добавления новой карточки
imageAddButton.addEventListener("click", () => {
  popupFormAddImage.open();
  popupAddImageFormValidation.resetValidationState();
});

function handleFormAddImageSubmit(data) {
  const itemValue = {
    name: data.place__name,
    link: data.place__link,
  };
  createCard(itemValue);
}
const popupFullscreenImageOpened = new PopupWithImage(".popup_image");
popupFullscreenImageOpened.setEventListeners();

function handleCardClick() {
  popupFullscreenImageOpened.open(this._link, this._name);
}

// класс Section
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      createCard(item);
    },
  },
  ".photo-grid__list"
);
cardList.renderItems();

function createCard(data) {
  const card = new Card(data, "#photo-grid__item", handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

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
