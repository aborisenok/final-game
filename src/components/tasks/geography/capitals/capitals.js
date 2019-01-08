import template from './capitals.template';
import Utils from '../../../../utils';
import Geography from '../geography';
import './capitals.css';

class Capitals {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Capitals.draw(task.explanation, randomTask);

    const checkAnswer = Capitals.checkInputAnswer.bind(null, randomTask.answer);
    Capitals.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.geography__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    const capitalsCity = document.querySelector('.capitals__city');
    capitalsCity.innerHTML = task.variables[0];

    task.variables[1].forEach((item) => {
      const wordCountry = document.createElement('span');
      wordCountry.classList.add('capitals__item');
      wordCountry.innerHTML = item;
      container.appendChild(wordCountry);
    });

    const taskContainer = document.querySelector('.capitals__answers');
    taskContainer.prepend(container);
  }

  static setEventListener(func) {
    const geographyContainer = document.querySelector('.capitals__answers');
    geographyContainer.addEventListener('click', func);
    window.addEventListener('keydown', Capitals.controlCapitalsByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Capitals.controlCapitalsByKeys);
  }

  static controlCapitalsByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const selectedClass = 'selected';

    const listOfItems = document.querySelectorAll('.capitals__item');
    const selectedItem = Utils.defineSelectedElement(listOfItems, selectedClass);

    if (selectedItem) {
      if (event.keyCode === ENTER_KEY) {
        selectedItem.click();
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(listOfItems, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(listOfItems, selectedClass);
      }
    } else {
      Utils.selectElement(listOfItems[0], selectedClass);
    }
  }

  static checkInputAnswer(rightAnswer, event) {
    const target = event.target;
    let isCorrect = false;

    if (target.classList.contains('capitals__item')) {
      const answer = target.innerHTML;
      if (answer === rightAnswer) {
        isCorrect = true;
      }
      Capitals.removeEventListener();
      Geography.sendAnswerResultBack(isCorrect);
    }
  }
}

export default Capitals;
