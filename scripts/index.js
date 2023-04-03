const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupOpen = document.querySelector('.popup');
const nameInput = popupOpen.querySelector('.popup__input_type_name');
const jobInput = popupOpen.querySelector('.popup__input_type_job');

const editProfile = document.querySelector('.profile__edit-button');
const popupClose = popupOpen.querySelector('.popup__close');

const popupForm = popupOpen.querySelector('.popup__form');
const popupFormNewItem = document.querySelector('.popup__form_type_new-item')


const popupImageContainerOpen = document.querySelector('.popup_image')
const popupFullscreenImage = popupImageContainerOpen.querySelector('.popup__fullscreen-image')
const popupFigcaption = popupImageContainerOpen.querySelector('.popup__figcaption')


const popupAddForm = document.querySelector('.popup_new-item-form');
const popupAddFormClosed = popupAddForm.querySelector('.popup__close')

const createNewItemButton = document.querySelector('.popup__button-new-item-edit')



const imageGridList = document.querySelector('.photo-grid__list');
const addButton = document.querySelector('.profile__add-button')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup (popup) {
  popup.classList.add('popup_opened')
}

editProfile.addEventListener('click', () =>{
  openPopup(popupOpen)
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});


function closePopup (popup) {
  popup.classList.remove('popup_opened')
}


popupClose.addEventListener('click', () => {
  closePopup(popupOpen)
});
 
 
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent =  nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupOpen);
  }
  popupForm.addEventListener('submit', handleFormSubmit);


popupAddFormClosed.addEventListener('click',() => {
  closePopup(popupAddForm)
});

addButton.addEventListener('click', () => {
  openPopup(popupAddForm)
});



initialCards.forEach((elt) =>{
  const elementt= addImage(elt);
  imageGridList.append(elementt);
})

function newItemSubmit (event) {
  event.preventDefault();
const imageLink = document.querySelector('.popup__input_type_new-item-link');
const imageTitle = document.querySelector('.popup__input_type_new-item-place');
const itemValue = {name: imageTitle.value, link: imageLink.value}; 
initialCards.unshift (itemValue);
addImage(itemValue)
popupAddForm.classList.remove('popup_opened');
}
popupFormNewItem.addEventListener('submit', newItemSubmit)


function addImage (elt) {
  const itemTemplate = document.querySelector('#photo-grid__item').content;
  const itemElement = itemTemplate.querySelector('.photo-grid__item').cloneNode(true);
  itemElement.querySelector('.photo-grid__image').src = elt.link;
  itemElement.querySelector('.photo-grid__image').alt = elt.name;
  itemElement.querySelector('.photo-grid__title').textContent = elt.name;
  itemElement.querySelector ('.photo-grid__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('photo-grid__like_active');
   } )
  const deleteButton = itemElement.querySelector('.photo-grid__remove-item');
  deleteButton.addEventListener('click', function () {
  const deleteItem = deleteButton.closest('.photo-grid__item');
  deleteItem.remove();
  }); 
  itemElement.querySelector('.photo-grid__image').addEventListener('click', function() { //пустой попа открывапется надо его заполнить и починить кнопку закртыия здесь и в другом попапе
    popupImageContainerOpen.classList.add('popup_opened');
    popupFullscreenImage.src = elt.link;
    popupFullscreenImage.alt = elt.name;
    popupFigcaption.textContent = elt.name;

const popupImageContainerClosed = popupImageContainerOpen.querySelector('.popup__close')
  popupImageContainerClosed.addEventListener('click',() => {
  popupImageContainerOpen.classList.remove('popup_opened') 
  });
  })
  imageGridList.prepend(itemElement);
}



