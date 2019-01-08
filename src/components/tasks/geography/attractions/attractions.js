import template from './attractions.template';
import Utils from '../../../../utils';
import Geography from '../geography';
import './attractions.css';

class Attractions {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Attractions.draw(task.explanation, randomTask);

    const checkAnswer = Attractions.checkInputAnswer.bind(null, randomTask.answer);
    Attractions.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.geography__explanation');
    taskExplanation.innerHTML = explanation;

    const container = document.createDocumentFragment();

    const attractionsCountry = document.querySelector('.attractions__country');
    attractionsCountry.innerHTML = task.variables[0];

    task.variables[1].forEach((item) => {
      const answerItem = Attractions.createAnswerItem(item);
      container.appendChild(answerItem);
    });

    const answerContainer = document.querySelector('.attractions__answers');
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
    window.addEventListener('keydown', Attractions.controlAttractionsByKeys);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Attractions.controlAttractionsByKeys);
  }

  static controlAttractionsByKeys(event) {
    const ENTER_KEY = 13;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
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
          Attractions.toggleCheckBox(checkBox);
        } else {
          selectedItem.click();
        }
      } else if (event.keyCode === UP_KEY) {
        Utils.selectPrevElement(itemsArr, selectedClass);
      } else if (event.keyCode === DOWN_KEY) {
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

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('.attractions__answers');
    const answersList = [];

    Array.from(inputAnswer.children).forEach((elem) => {
      const input = elem.querySelector('input');

      if (input.checked) {
        const answer = elem.querySelector('.answer__variant').innerHTML;
        answersList.push(answer);
      }
    });

    let isCorrect = rightAnswer.every(item => answersList.includes(item));

    if (answersList.length !== rightAnswer.length) {
      isCorrect = false;
    }
    Attractions.removeEventListener();
    Geography.sendAnswerResultBack(isCorrect);
  }
}

export default Attractions;
