import { initialCards } from "./constants.js";
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");

const popupFormUserEditOpen = document.querySelector(".popup_form_user-edit");
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
const popupFigcaption =
  popupImageContainerOpen.querySelector(".popup__figcaption");

const popupAddImageForm = document.querySelector(".popup_new-item-form");
const popupAddImageFormClosed =
  popupAddImageForm.querySelector(".popup__close");

const imageGridList = document.querySelector(".photo-grid__list");
const imageAddButton = document.querySelector(".profile__add-button");

const imageLink = document.querySelector(".popup__input_type_new-item-link");
const imageTitle = document.querySelector(".popup__input_type_new-item-place");

const itemTemplate = document.querySelector("#photo-grid__item");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

userEditButton.addEventListener("click", () => {
  openPopup(popupFormUserEditOpen);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  closePopupEsc(popupFormUserEditOpen);
  closeOverlay(popupFormUserEditOpen);
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupFormUserEditClosed.addEventListener("click", () => {
  closePopup(popupFormUserEditOpen);
});

function handleFormUserEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // closeOverlay(popupFormUserEditOpen);
  // closePopupEsc(popupFormUserEditOpen);
  closePopup(popupFormUserEditOpen);
}
popupFormUserEdit.addEventListener("submit", handleFormUserEditSubmit);
popupAddImageFormClosed.addEventListener("click", () => {
  closePopup(popupAddImageForm);
});

imageAddButton.addEventListener("click", () => {
  openPopup(popupAddImageForm);
  closeOverlay(popupAddImageForm);
  closePopupEsc(popupAddImageForm);
});

function handleFormNewItemSubmit(event) {
  event.preventDefault();
  const itemValue = { name: imageTitle.value, link: imageLink.value };
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
    popupFigcaption.textContent = cardData.name;
    closeOverlay(popupImageContainerOpen);
    closePopupEsc(popupImageContainerOpen);
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

function closeOverlay(form) {
  const popupOverlayClose = form.querySelector(".popup__overlay");
  popupOverlayClose.addEventListener("click", () => {
    closePopup(form);
  });
}

// не работает закрытие по эскейпу/ создал функцию на ивент нажатия по кейкоду 27 теперь надо добавить слушатель во все попапы
function closePopupEsc(form) {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      console.log(evt.key);
      closePopup(form);
    }
  });
}
