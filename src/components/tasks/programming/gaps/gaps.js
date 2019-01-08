import template from './gaps.template';
import Utils from '../../../../utils';
import Programming from '../programming';
import './gaps.css';

class Gaps {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Gaps.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#gaps__input');
    inputField.focus();

    const checkAnswer = Gaps.checkInputAnswer.bind(null, randomTask.answer);
    Gaps.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.programming__explanation');
    taskExplanation.innerHTML = explanation;

    const firstPart = document.querySelector('.gaps__first-part');
    firstPart.innerHTML = task.variables[0];

    const secondPart = document.querySelector('.gaps__second-part');
    secondPart.innerHTML = task.variables[1];

    const outputPart = document.querySelector('.gaps__output');
    outputPart.innerHTML = task.variables[2];
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
    window.addEventListener('keydown', Gaps.submitInputAnswer);
  }

  static removeEventListeners() {
    window.removeEventListener('keydown', Gaps.submitInputAnswer);
  }

  static submitInputAnswer(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      document.querySelector('#task_answer').click();
    }
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.gaps__input').value;
    const answer = inputAnswer.toLowerCase().trim();
    let isCorrect = false;

    if (rightAnswer === answer) {
      isCorrect = true;
    }
    Gaps.removeEventListeners();
    Programming.sendAnswerResultBack(isCorrect);
  }
}

export default Gaps;
