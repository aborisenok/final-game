import Sortable from 'sortablejs';
import template from './sorting.template';
import Utils from '../../../../utils';
import Geography from '../geography';
import './sorting.css';

class Sorting {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Sorting.draw(task.explanation, randomTask);
    Sorting.addSortableBehavior();

    const checkAnswer = Sorting.checkInputAnswer.bind(null, randomTask.answer);
    Sorting.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.geography__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    task.variables.forEach((item) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('sorting__item');
      taskItem.innerHTML = item;
      container.appendChild(taskItem);
    });

    const taskContainer = document.querySelector('.sorting__container');
    taskContainer.appendChild(container);
  }

  static addSortableBehavior() {
    const sortableContainer = document.querySelector('#sorting__container');

    Sortable.create(sortableContainer, {
      group: 'sorting__container',
      animation: 100,
    });
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
    window.addEventListener('keydown', Sorting.checkInputKey);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Sorting.checkInputKey);
  }

  static checkInputKey(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      document.querySelector('#task_answer').click();
    }
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.sorting__container');
    const isCorrect = Array.from(inputAnswer.children)
      .every((elem, index) => elem.innerHTML === rightAnswer[index]);
    Sorting.removeEventListener();
    Geography.sendAnswerResultBack(isCorrect);
  }
}

export default Sorting;
