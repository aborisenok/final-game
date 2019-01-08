import Sortable from 'sortablejs';
import template from './order.template';
import Utils from '../../../../utils';
import English from '../english';
import './order.css';

class Order {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Order.draw(task.explanation, randomTask);
    Order.addSortableBehavior();

    const checkAnswer = Order.checkInputAnswer.bind(null, randomTask.answer);
    English.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.english__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    task.variables.forEach((item) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('order__item');
      taskItem.innerHTML = item;
      container.appendChild(taskItem);
    });

    const taskContainer = document.querySelector('.order__container');
    taskContainer.appendChild(container);
  }

  static addSortableBehavior() {
    const sortableContainer = document.querySelector('#order__container');

    Sortable.create(sortableContainer, {
      group: 'order__container',
      animation: 100,
    });
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.order__container');
    const isCorrect = Array.from(inputAnswer.children)
      .every((elem, index) => elem.innerHTML === rightAnswer[index]);
    English.sendAnswerResultBack(isCorrect);
  }
}

export default Order;
