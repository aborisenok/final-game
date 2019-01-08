import template from './navigationLeft.template';
import './navigationLeft.css';

class NavigationLeft {
  static draw() {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);
  }

  static remove() {
    const leftNav = document.querySelector('.left-nav');
    leftNav.remove();
  }

  static makeButtonActive(button) {
    const buttonOn = button;
    buttonOn.dataset.music = 'on';
    buttonOn.classList.add('nav__btn_active');
  }

  static makeButtonPassive(button) {
    const buttonOff = button;
    buttonOff.dataset.music = 'off';
    buttonOff.classList.remove('nav__btn_active');
  }

  static setMusicControlListener(func) {
    const buttonMusic = document.querySelector('#btn_music');
    buttonMusic.addEventListener('click', func);
  }

  static setExitGameControlListener(func) {
    const buttonExit = document.querySelector('#btn_exit');
    buttonExit.addEventListener('click', func);
  }
}

export default NavigationLeft;
