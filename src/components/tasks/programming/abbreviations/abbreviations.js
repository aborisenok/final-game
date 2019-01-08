import template from './abbreviations.template';
import Utils from '../../../../utils';
import Programming from '../programming';
import './abbreviations.css';

class Abbreviations {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Abbreviations.draw(task.explanation, randomTask);

    const checkAnswer = Abbreviations.checkInputAnswer.bind(null, randomTask.answer);
    Abbreviations.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.programming__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    const taskWord = document.querySelector('.abbreviations__word');
    taskWord.innerHTML = task.variables[0];

    task.variables[1].forEach((item) => {
      const answerItem = document.createElement('span');
      answerItem.classList.add('abbreviations__item');
      answerItem.innerHTML = item;
      container.appendChild(answerItem);
    });

    const taskContainer = document.querySelector('.abbreviations__answers');
    taskContainer.prepend(container);
  }

  static setEventListener(func) {
    const geographyContainer = document.querySelector('.abbreviations__answers');
    geographyContainer.addEventListener('click', func);
    window.addEventListener('keydown', Abbreviations.controlAbbreviationsByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Abbreviations.controlAbbreviationsByKeys);
  }

  static controlAbbreviationsByKeys(event) {
    const ENTER_KEY = 13;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const selectedClass = 'selected';

    const listOfItems = document.querySelectorAll('.abbreviations__item');
    const selectedItem = Utils.defineSelectedElement(listOfItems, selectedClass);

    if (selectedItem) {
      if (event.keyCode === ENTER_KEY) {
        selectedItem.click();
      } else if (event.keyCode === UP_KEY) {
        Utils.selectPrevElement(listOfItems, selectedClass);
      } else if (event.keyCode === DOWN_KEY) {
        Utils.selectNextElement(listOfItems, selectedClass);
      }
    } else {
      Utils.selectElement(listOfItems[0], selectedClass);
    }
  }


  static checkInputAnswer(rightAnswer, event) {
    const target = event.target;
    let isCorrect = false;

    if (target.classList.contains('abbreviations__item')) {
      const answer = target.innerHTML;
      if (answer === rightAnswer) {
        isCorrect = true;
      }
      Abbreviations.removeEventListener();
      Programming.sendAnswerResultBack(isCorrect);
    }
  }
}

export default Abbreviations;
