import Sortable from 'sortablejs';
import template from './constructor.template';
import Utils from '../../../../utils';
import Maths from '../maths';
import './constructor.css';

class Constructor {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Constructor.draw(task.explanation, randomTask);
    Constructor.addSortableBehavior();

    const checkAnswer = Constructor.checkInputAnswer.bind(null, randomTask.answer);
    Maths.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.maths__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    task.variables.forEach((item) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('constructor__item');
      taskItem.innerHTML = item;
      container.appendChild(taskItem);
    });

    const taskContainer = document.querySelector('.constructor__container');
    taskContainer.appendChild(container);
  }

  static addSortableBehavior() {
    const sortableContainer = document.querySelector('#constructor__container');

    Sortable.create(sortableContainer, {
      group: 'constructor__container',
      animation: 100,
    });
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.constructor__container');
    const isCorrect = rightAnswer.some(item => Array.from(inputAnswer.children)
      .every((elem, index) => elem.innerHTML === item[index]));
    Maths.sendAnswerResultBack(isCorrect);
  }
}

export default Constructor;
