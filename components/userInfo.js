export default class UserInfo {
  constructor(userSelector, infoSelector) {
    this._profileName = document.querySelector(userSelector);
    this._profileInfo = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const userDataHtml = {
      name: this._profileName.textContent,
      info: this._profileInfo.textContent,
    };
    return userDataHtml;
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.profileNameValue;
    this._profileInfo.textContent = userData.profileInfoValue;
  }
}
