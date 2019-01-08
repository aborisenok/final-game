import template from './comparison.template';
import Utils from '../../../../utils';
import Maths from '../maths';
import './comparison.css';

class Comparison {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Comparison.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#maths__input');
    inputField.focus();

    const checkAnswer = Comparison.checkInputAnswer.bind(null, randomTask.answer);
    Maths.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.maths__explanation');
    taskExplanation.innerHTML = explanation;

    const firstValue = document.querySelector('.maths__variable-one');
    firstValue.innerHTML = task.variables[0];
    const secondValue = document.querySelector('.maths__variable-two');
    secondValue.innerHTML = task.variables[1];
  }

  static checkInputAnswer(answer) {
    const inputAnswer = document.querySelector('#maths__input').value;
    let isCorrect = false;

    if (inputAnswer === answer) {
      isCorrect = true;
    }
    Maths.sendAnswerResultBack(isCorrect);
  }
}

export default Comparison;
