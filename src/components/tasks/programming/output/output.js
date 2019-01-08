import template from './output.template';
import Utils from '../../../../utils';
import Programming from '../programming';
import './output.css';

class Output {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Output.draw(task.explanation, randomTask);

    const checkAnswer = Output.checkInputAnswer.bind(null, randomTask.answer);
    Output.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.programming__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    const taskQuestion = document.querySelector('.output__question');
    taskQuestion.innerHTML = task.variables[0];

    task.variables[1].forEach((item) => {
      const answerItem = Output.createAnswerItem(item);
      container.appendChild(answerItem);
    });

    const answerContainer = document.querySelector('.output__answers');
    answerContainer.prepend(container);
  }

  static createAnswerItem(item) {
    const answerItem = document.createElement('label');
    answerItem.classList.add('checkbox__container');

    const answerVariant = document.createElement('span');
    answerVariant.classList.add('answer__variant');
    answerVariant.innerHTML = item;

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');

    answerItem.appendChild(answerVariant);
    answerItem.appendChild(input);
    answerItem.appendChild(checkmark);

    return answerItem;
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);

    const answerContainer = document.querySelector('.output__answers');
    answerContainer.addEventListener('change', Output.selectOnlyOneElement);
    window.addEventListener('keydown', Output.controlOutputByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Output.controlOutputByKeys);
  }

  static controlOutputByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const selectedClass = 'selected';

    const listOfItems = document.querySelectorAll('.checkbox__container');
    const itemsArr = Array.from(listOfItems);
    const button = document.querySelector('#task_answer');
    itemsArr.push(button);
    const selectedItem = Utils.defineSelectedElement(itemsArr, selectedClass);
    if (selectedItem) {
      if (event.keyCode === ENTER_KEY) {
        if (selectedItem.classList.contains('checkbox__container')) {
          const checkBox = selectedItem.querySelector('input');
          Output.toggleCheckBox(checkBox);
        } else {
          selectedItem.click();
        }
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(itemsArr, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(itemsArr, selectedClass);
      }
    } else {
      Utils.selectElement(itemsArr[0], selectedClass);
    }
  }

  static toggleCheckBox(elem) {
    if (elem.checked) {
      elem.checked = false;
    } else {
      elem.checked = true;
    }
  }

  static selectOnlyOneElement(event) {
    const target = event.target;
    const answerContainer = document.querySelector('.output__answers');

    Array.from(answerContainer.children).forEach((elem) => {
      const input = elem.querySelector('input');
      input.checked = false;
    });

    target.checked = true;
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.output__answers');
    const isCorrect = Array.from(inputAnswer.children).some((elem) => {
      const input = elem.querySelector('input');
      let answer;
      if (input.checked) {
        answer = elem.querySelector('.answer__variant').innerHTML;
      }
      return answer === rightAnswer;
    });
    Output.removeEventListener();
    Programming.sendAnswerResultBack(isCorrect);
  }
}

export default Output;
