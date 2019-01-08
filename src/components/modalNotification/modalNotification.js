import Utils from '../../utils';
import template from './modalNotification.template';
import './modalNotification.css';

class ModalNotification {
  static showModalNotification(message, time) {
    ModalNotification.draw(message);
    Utils.pause(time).then(() => {
      ModalNotification.remove();
    });
  }

  static draw(message) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);
    const modalMessage = document.querySelector('.modal__message');
    modalMessage.innerHTML = message;
  }

  static remove() {
    const modalNotification = document.querySelector('.modal__notification');
    modalNotification.remove();
  }
}

export default ModalNotification;
