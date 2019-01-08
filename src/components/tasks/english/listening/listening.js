import template from './listening.template';
import Utils from '../../../../utils';
import English from '../english';
import './listening.css';

class Listening {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Listening.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#listening__input');
    inputField.focus();

    const checkAnswer = Listening.checkInputAnswer.bind(null, randomTask.answer);
    const playAudio = Utils.createSound.bind(null, randomTask.variables);
    Listening.setEventListener(checkAnswer, playAudio);
  }

  static draw(explanation) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.english__explanation');
    taskExplanation.innerHTML = explanation;
  }

  static setEventListener(checkAnswer, playAudio) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', checkAnswer);

    const listeningButton = document.querySelector('#listening__button');
    listeningButton.addEventListener('click', playAudio);

    window.addEventListener('keydown', Listening.checkInputKey);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Listening.checkInputKey);
  }

  static checkInputKey(event) {
    const ENTER_KEY = 13;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    const selectedClass = 'selected';

    const listeningButton = document.querySelector('#listening__button');
    const inputAnswer = document.querySelector('#listening__input');
    const answerButton = document.querySelector('#task_answer');

    const arrOfElem = [listeningButton, inputAnswer, answerButton];
    const selectedItem = Utils.defineSelectedElement(arrOfElem, selectedClass);
    if (selectedItem) {
      if (event.keyCode === ENTER_KEY) {
        selectedItem.click();
      } else if (event.keyCode === UP_KEY) {
        Utils.selectPrevElement(arrOfElem, selectedClass);
      } else if (event.keyCode === DOWN_KEY) {
        Utils.selectNextElement(arrOfElem, selectedClass);
      }
    } else {
      Utils.selectElement(arrOfElem[0], selectedClass);
    }
  }

  static checkInputAnswer(rightAnswer) {
    const inputAnswer = document.querySelector('#listening__input').value;
    const answer = inputAnswer.toLowerCase().trim();
    let isCorrect = false;

    if (rightAnswer === answer) {
      isCorrect = true;
    }
    Listening.removeEventListener();
    English.sendAnswerResultBack(isCorrect);
  }
}

export default Listening;
