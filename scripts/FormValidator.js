export default class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
    this.inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this.buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _setEventListener() {
    this._toggleButtonState(this.inputList, this.buttonElement);
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this.inputList, this.buttonElement);
      });
    });
  }
  // отображение поля с ошибкой валидации
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  // скрытие поля с ошибкой валидации
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  // определение отображения ошибки
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  //проверка валидности поля
  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // кнопка сабмита активна
  _enableButton() {
    this.buttonElement.classList.remove(this._inactiveButtonClass);
    this.buttonElement.removeAttribute("disabled");
  }
  // кнопка сабмита неактивна
  _disableButton() {
    this.buttonElement.classList.add(this._inactiveButtonClass);
    this.buttonElement.setAttribute("disabled", "");
  }
  //назначение статуса кнопки в зависимости от валидности
  _toggleButtonState() {
    if (this._hasInvalidInput(this.inputList)) {
      this._disableButton(this.buttonElement);
    } else {
      this._enableButton(this.buttonElement);
    }
  }
  // публичный метод обнуления формы
  resetValidationState() {
    this._disableButton(this.buttonElement);
    this.inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidations() {
    this._setEventListener();
  }
}
