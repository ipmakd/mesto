import { initialCards, validationConfig } from "./constants.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import Section from "./section.js";
import PopupWithImage from "./popupWithImage.js";

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

const popupImageContainerOpen = document.querySelector(".popup_image");

const popupFullscreenImage = popupImageContainerOpen.querySelector(
  ".popup__fullscreen-image"
);
const popupFullscreenImageCaption =
  popupImageContainerOpen.querySelector(".popup__figcaption");

const popupAddImageForm = document.querySelector(".popup_new-item-form");

const imageGridList = document.querySelector(".photo-grid__list");
const imageAddButton = document.querySelector(".profile__add-button");

const inputLinkFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-link"
);
const inputTitleFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-place"
);

// слушатель закрытия на все попапы по клику на оверлей и кнопке
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupPressEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupPressEsc);
}

function closePopupPressEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function editUserData() {
  openPopup(popupFormUserEditOpen);
  formUserEditValidation.resetValidationState();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
// открытие попапа редактирования профиля по кнопке userEditButton
userEditButton.addEventListener("click", editUserData);

function handleFormUserEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupFormUserEditOpen);
}
popupFormUserEdit.addEventListener("submit", handleFormUserEditSubmit);

imageAddButton.addEventListener("click", () => {
  openPopup(popupAddImageForm);
  popupAddImageFormValidation.resetValidationState();
});

//Создание нового элемента
function handleFormNewItemSubmit(event) {
  event.preventDefault();
  const itemValue = {
    name: inputTitleFormAddNewCard.value,
    link: inputLinkFormAddNewCard.value,
  };

  createCard(itemValue);
  closePopup(popupAddImageForm);
}
popupFormNewItem.addEventListener("submit", handleFormNewItemSubmit);

// function handleCardClick(link, name) {
//   const popupFullScreenOpen = new PopupWithImage(".popup_image", link, name);
//   popupFullScreenOpen.open();
// }

const renderImageElement = (itemElement) => {
  imageGridList.prepend(itemElement);
};

function createCard(data) {
  const card = new Card(data, "#photo-grid__item" /*, handleCardClick()*/);
  const cardElement = card.generateCard();
  renderImageElement(cardElement);
}

// класс Section
const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#photo-grid__item" /*, handleCardClick()*/);
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

// export {
//   popupFullscreenImage,
//   popupFullscreenImageCaption,
//   openPopup,
//   popupImageContainerOpen,
// };
