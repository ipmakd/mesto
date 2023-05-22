export default class UserInfo {
  constructor(userSelector, infoSelector) {
    this.user = document.querySelector(userSelector);
    this.info = document.querySelector(infoSelector);
    this._profileName = document.querySelector(".profile__name");
    this._profileInfo = document.querySelector(".profile__job");
  }
  // Данный метод реализован некорректно.
  // Он не должен устанавливать значения в поля ввода,
  // он должен возвращать в виде объекта данные о пользователе взятые со страницы.
  getUserInfo() {
    const userData = {
      name: this.user.value,
      info: this.info.value,
    };
    return userData;
  }

  // Данный метод должен в виде аргументов
  // принимать данные о пользователе для установки на странице.
  //  Соотвественно эти данные следует использовать внутри данного метода.
  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileInfo.textContent = userData.info;
  }
}
