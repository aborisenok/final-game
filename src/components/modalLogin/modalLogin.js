import template from './modalLogin.template';
import playerCofig from '../../configs/playerConfig';
import './modalLogin.css';

class ModalLogin {
  static create() {
    ModalLogin.draw();
    ModalLogin.insertPlayerImg(playerCofig.hero);

    const inputField = document.querySelector('#player-name');
    inputField.focus();
  }

  static draw() {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);
  }

  static insertPlayerImg(hero) {
    const modalLoginImg = document.querySelector('.modal__hero-img');
    modalLoginImg.src = hero.sprites.head.path;
  }

  static remove() {
    const modalLogin = document.querySelector('.modal__login');
    modalLogin.remove();
  }

  static setEventListener(func) {
    const button = document.querySelector('#button__login');
    button.addEventListener('click', func);
    window.addEventListener('keydown', ModalLogin.submitInputLogin);
  }

  static removeEventListeners(func) {
    const button = document.querySelector('#button__login');
    button.removeEventListener('click', func);
    window.removeEventListener('keydown', ModalLogin.submitInputLogin);
  }

  static submitInputLogin(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      document.querySelector('#button__login').click();
    }
  }
}

export default ModalLogin;
