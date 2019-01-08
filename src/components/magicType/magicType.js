import template from './magicType.template';
import TaskList from '../taskList/taskList';
import Utils from '../../utils';
import './magicType.css';

class MagicType {
  static initMagicType() {
    Utils.pause(1000)
      .then(() => {
        MagicType.createMagicType();
      });
  }

  static createMagicType() {
    MagicType.draw();
    MagicType.setEventListener(TaskList.initTaskList);
  }

  static draw() {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);
  }

  static remove() {
    const modalType = document.querySelector('.magic__choose');
    MagicType.removeEventListeners(TaskList.initTaskList);
    modalType.remove();
  }

  static setEventListener(func) {
    const buttonHealing = document.querySelector('#magic__healing');
    const buttonAttack = document.querySelector('#magic__attack');
    buttonHealing.addEventListener('click', func);
    buttonAttack.addEventListener('click', func);
    window.addEventListener('keydown', MagicType.controlMagicTypeByKeys);
  }

  static removeEventListeners(func) {
    const buttonHealing = document.querySelector('#magic__healing');
    const buttonAttack = document.querySelector('#magic__attack');
    buttonHealing.removeEventListener('click', func);
    buttonAttack.removeEventListener('click', func);
    window.removeEventListener('keydown', MagicType.controlMagicTypeByKeys);
  }

  static controlMagicTypeByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const selectedClass = 'selected';

    const listOfButtons = document.querySelectorAll('.magic__type-btn');
    const selectedButton = Utils.defineSelectedElement(listOfButtons, selectedClass);

    if (selectedButton) {
      if (event.keyCode === ENTER_KEY) {
        selectedButton.click();
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(listOfButtons, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(listOfButtons, selectedClass);
      }
    } else {
      Utils.selectElement(listOfButtons[0], selectedClass);
    }
  }
}

export default MagicType;
