const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupOpen = document.querySelector('.popup');
const nameInput = popupOpen.querySelector('.popup__input_type_name');
const jobInput = popupOpen.querySelector('.popup__input_type_job');
const saveInput = popupOpen.querySelector('.popup__button-save');
const editProfile = document.querySelector('.profile__edit-button');
const popupClose = popupOpen.querySelector('.popup__close');
const popupForm = popupOpen.querySelector('.popup__form');

function popupFormOpen () {
  popupOpen.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

editProfile.addEventListener('click', popupFormOpen);

function popupFormClosed () {
  popupOpen.classList.remove('popup_opened');
}

popupClose.addEventListener('click', popupFormClosed)

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent =  nameInput.value;
  profileJob.textContent = jobInput.value;
  popupFormClosed();
  }

popupForm.addEventListener('submit', handleFormSubmit);