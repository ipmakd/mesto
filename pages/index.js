
const editProfile = document.querySelector(".profile__edit-button");
const popupOpen = document.querySelector(".popup");
const popupClose = popupOpen.querySelector(".popup__close");
const nameInput = popupOpen.querySelector(".popup__input_name");
const jobInput = popupOpen.querySelector(".popup__input_job");
const saveInput = popupOpen.querySelector(".popup__button-save");
const popupForm = popupOpen.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");


editProfile.addEventListener('click', () => {
popupOpen.classList.add("popup_open");
nameInput.value = profileName.innerHTML;
jobInput.value = profileJob.innerHTML;
});

popupClose.addEventListener('click', () => {
  popupOpen.classList.remove("popup_open");
})

popupForm.addEventListener('submit', (event) => {
event.preventDefault();
const name = nameInput.value;
const job = jobInput.value;
profileName.innerHTML = name;
profileJob.innerHTML = job;
})