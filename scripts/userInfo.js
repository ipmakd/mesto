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

// Аргумент - объект с двумя ключами { элементИнформацииОСебе, элементИмени }
// есть метод getUserInfo который возвращает текущие значения из разметки. то есть textContent свойство двух элементов в виде объекта
// setUserInfo - получает объект с ключами и устанавливает их в разметку (то есть делает наоборот в отличие от getUserInfo)

// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
