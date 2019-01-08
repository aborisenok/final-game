import template from './sequence.template';
import Utils from '../../../../utils';
import Maths from '../maths';
import './sequence.css';

class Sequence {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Sequence.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#maths__input');
    inputField.focus();

    const checkAnswer = Sequence.checkInputAnswer.bind(null, randomTask.answer);
    Maths.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.maths__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    task.variables.forEach((item) => {
      const mathsItem = document.createElement('span');
      mathsItem.classList.add('maths__variable');
      mathsItem.innerHTML = item;
      container.appendChild(mathsItem);
    });

    const taskContainer = document.querySelector('.maths__container');
    taskContainer.prepend(container);
  }

  static checkInputAnswer(answer) {
    const inputAnswer = +document.querySelector('#maths__input').value;
    let isCorrect = false;

    if (inputAnswer === answer) {
      isCorrect = true;
    }
    Maths.sendAnswerResultBack(isCorrect);
  }
}

export default Sequence;
