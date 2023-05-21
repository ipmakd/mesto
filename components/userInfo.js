export default class UserInfo {
  constructor(userSelector, infoSelector) {
    this.user = document.querySelector(userSelector);
    this.info = document.querySelector(infoSelector);
  }
  getUserInfo() {
    this.user.value = document.querySelector(".profile__name").textContent;
    this.info.value = document.querySelector(".profile__job").textContent;
  }
  setUserInfo() {
    document.querySelector(".profile__name").textContent = this.user.value;
    document.querySelector(".profile__job").textContent = this.info.value;
  }
}
