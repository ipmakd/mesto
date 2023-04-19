const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function enableButton(buttonElement) {
  buttonElement.classList.remove("popup__button_disabled");
  buttonElement.removeAttribute("disabled");
}

function disableButton(buttonElement) {
  buttonElement.classList.add("popup__button_disabled");
  buttonElement.setAttribute("disabled", "");
}

function toggleButtonState(formElement, buttonElement) {
  // console.log(formElement);
  // console.log(buttonElement);
  // console.log(formElement.checkValidity);
  if (formElement.checkValidity) {
    enableButton(buttonElement);
  } else {
    disableButton(buttonElement);
  }
}

// ufnction toggleButtonValidity({ submitButtonSelector, ...rest }, form) {
//   const submitButton = form.querySelector(submitButtonSelector);

//   if (form.checkValidity()) {
//       enableButton(rest, submitButton);
//   } else {
//       disableButton(rest, submitButton);
//   }
// }

enableValidation();
