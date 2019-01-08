import template from './statements.template';
import Utils from '../../../../utils';
import Programming from '../programming';
import './statements.css';

class Statements {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Statements.draw(task.explanation, randomTask);

    const checkAnswer = Statements.checkInputAnswer.bind(null, randomTask.answer);
    Statements.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.programming__explanation');
    taskExplanation.innerHTML = explanation;

    const statementsSentence = document.querySelector('.statements__sentence');
    statementsSentence.innerHTML = task.variables;
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
    window.addEventListener('keydown', Statements.controlStatementsByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Statements.controlStatementsByKeys);
  }

  static controlStatementsByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_UP = 38;
    const RIGHT_DOWN = 40;
    const selectedClass = 'selected';

    const listOfItems = document.querySelectorAll('.statements__item');
    const itemsArr = Array.from(listOfItems);
    const button = document.querySelector('#task_answer');
    itemsArr.push(button);
    const selectedItem = Utils.defineSelectedElement(itemsArr, selectedClass);
    if (selectedItem) {
      if (event.keyCode === ENTER_KEY) {
        if (selectedItem.classList.contains('statements__item')) {
          const checkBox = document.getElementById(selectedItem.htmlFor);
          checkBox.checked = true;
        } else {
          selectedItem.click();
        }
      } else if (event.keyCode === LEFT_UP) {
        Utils.selectPrevElement(itemsArr, selectedClass);
      } else if (event.keyCode === RIGHT_DOWN) {
        Utils.selectNextElement(itemsArr, selectedClass);
      }
    } else {
      Utils.selectElement(itemsArr[0], selectedClass);
    }
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('#programming__statements_true').checked;
    let isCorrect = false;

    if (inputAnswer === rightAnswer) {
      isCorrect = true;
    }
    Statements.removeEventListener();
    Programming.sendAnswerResultBack(isCorrect);
  }
}

export default Statements;
