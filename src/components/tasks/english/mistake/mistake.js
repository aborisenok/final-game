import template from './mistake.template';
import Utils from '../../../../utils';
import English from '../english';
import './mistake.css';

class Mistake {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Mistake.draw(task.explanation, randomTask);

    const checkAnswer = Mistake.checkInputAnswer.bind(null, randomTask.answer);
    Mistake.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.english__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    task.variables.forEach((item) => {
      const wordLetter = document.createElement('span');
      wordLetter.classList.add('english__letter');
      wordLetter.innerHTML = item;
      container.appendChild(wordLetter);
    });

    const taskContainer = document.querySelector('.mistake__container');
    taskContainer.prepend(container);
  }

  static setEventListener(func) {
    const englishContainer = document.querySelector('.mistake__container');
    englishContainer.addEventListener('click', func);
    window.addEventListener('keydown', Mistake.controlMistakeByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Mistake.controlMistakeByKeys);
  }

  static controlMistakeByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const selectedClass = 'selected';

    const listOfLetters = document.querySelectorAll('.english__letter');
    const selectedLetter = Utils.defineSelectedElement(listOfLetters, selectedClass);

    if (selectedLetter) {
      if (event.keyCode === ENTER_KEY) {
        selectedLetter.click();
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(listOfLetters, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(listOfLetters, selectedClass);
      }
    } else {
      Utils.selectElement(listOfLetters[0], selectedClass);
    }
  }

  static checkInputAnswer(rightAnswer, event) {
    const target = event.target;
    let isCorrect = false;

    if (target.classList.contains('english__letter')) {
      const answer = target.innerHTML;
      if (answer === rightAnswer) {
        isCorrect = true;
      }

      Mistake.removeEventListener();
      English.sendAnswerResultBack(isCorrect);
    }
  }
}

export default Mistake;
