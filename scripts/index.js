import { initialCards } from "./constants.js";
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const popupFormUserEditOpen = document.querySelector(".popup_form_user-edit");
const formUserEdit = document.querySelector(".popup__form_type_user-edit");
const nameInput = popupFormUserEditOpen.querySelector(
  ".popup__input_type_name"
);
const jobInput = popupFormUserEditOpen.querySelector(".popup__input_type_job");
const popupFormUserEditClosed =
  popupFormUserEditOpen.querySelector(".popup__close");
const popupFormUserEdit = popupFormUserEditOpen.querySelector(
  ".popup__form_type_user-edit"
);
const userEditButton = document.querySelector(".profile__edit-button");

const popupFormNewItem = document.querySelector(".popup__form_type_new-item");

const popupImageContainerOpen = document.querySelector(".popup_image");
const popupImageContainerClosed =
  popupImageContainerOpen.querySelector(".popup__close");
const popupFullscreenImage = popupImageContainerOpen.querySelector(
  ".popup__fullscreen-image"
);
const popupFullscreenImageCaption =
  popupImageContainerOpen.querySelector(".popup__figcaption");

const popupAddImageForm = document.querySelector(".popup_new-item-form");
const popupAddImageFormClosed =
  popupAddImageForm.querySelector(".popup__close");

const imageGridList = document.querySelector(".photo-grid__list");
const imageAddButton = document.querySelector(".profile__add-button");

const inputLinkFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-link"
);
const inputTitleFormAddNewCard = document.querySelector(
  ".popup__input_type_new-item-place"
);

const itemTemplate = document.querySelector("#photo-grid__item");

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupPressEsc);
  const popupOverlayClose = popup.querySelector(".popup__overlay");
  popupOverlayClose.addEventListener("click", () => {
    closePopup(popup);
  });
}

function resetForm(form) {
  form.reset();
  const buttonSubmitForm = form.querySelector(".popup__button");
  buttonSubmitForm.disabled = true;
  buttonSubmitForm.classList.add("popup__button_disabled");

  const errorClass = Array.from(form.querySelectorAll(".popup__error_visible"));
  errorClass.forEach((error) => {
    error.classList.remove("popup__error_visible");
  });

  const inputErrorClass = Array.from(
    form.querySelectorAll(".popup__input_type_error")
  );
  inputErrorClass.forEach((error) => {
    error.classList.remove("popup__input_type_error");
  });
}

function editUserData() {
  openPopup(popupFormUserEditOpen);
  resetForm(formUserEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

userEditButton.addEventListener("click", editUserData);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupPressEsc);
}

popupFormUserEditClosed.addEventListener("click", () => {
  closePopup(popupFormUserEditOpen);
});

function handleFormUserEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupFormUserEditOpen);
}
popupFormUserEdit.addEventListener("submit", handleFormUserEditSubmit);

popupAddImageFormClosed.addEventListener("click", () => {
  closePopup(popupAddImageForm);
});

imageAddButton.addEventListener("click", () => {
  openPopup(popupAddImageForm);
  resetForm(popupFormNewItem);
});

function handleFormNewItemSubmit(event) {
  event.preventDefault();
  const itemValue = {
    name: inputTitleFormAddNewCard.value,
    link: inputLinkFormAddNewCard.value,
  };
  renderImageElement(addImage(itemValue));
  closePopup(popupAddImageForm);
}
popupFormNewItem.addEventListener("submit", handleFormNewItemSubmit);

function addImage(cardData) {
  const itemElement = itemTemplate.content
    .querySelector(".photo-grid__item")
    .cloneNode(true);
  const itemElementImageData = itemElement.querySelector(".photo-grid__image");
  itemElementImageData.src = cardData.link;
  itemElementImageData.alt = cardData.name;
  itemElement.querySelector(".photo-grid__title").textContent = cardData.name;

  itemElement
    .querySelector(".photo-grid__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("photo-grid__like_active");
    });

  const deleteButton = itemElement.querySelector(".photo-grid__remove-item");
  deleteButton.addEventListener("click", function () {
    const deleteItem = deleteButton.closest(".photo-grid__item");
    deleteItem.remove();
  });

  itemElementImageData.addEventListener("click", function () {
    openPopup(popupImageContainerOpen);
    popupFullscreenImage.src = cardData.link;
    popupFullscreenImage.alt = cardData.name;
    popupFullscreenImageCaption.textContent = cardData.name;
  });
  return itemElement;
}

const renderImageElement = (itemElement) => {
  imageGridList.prepend(itemElement);
};

initialCards.forEach((cardData) => {
  const element = addImage(cardData);
  renderImageElement(element);
});

popupImageContainerClosed.addEventListener("click", () => {
  closePopup(popupImageContainerOpen);
});

function closePopupPressEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}
