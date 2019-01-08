import template from './translation.template';
import Utils from '../../../../utils';
import English from '../english';
import './translation.css';

class Translation {
  static createTask(task) {
    const randomTask = Utils.chooseRandomElem(task.tasks);
    Translation.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#translation__input');
    inputField.focus();

    const checkAnswer = Translation.checkInputAnswer.bind(null, randomTask.answer);
    English.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.english__explanation');
    taskExplanation.innerHTML = explanation;

    const englishWord = document.querySelector('.english__word');
    englishWord.innerHTML = task.variables;
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
  }

  static checkInputAnswer(answersList) {
    const inputAnswer = document.querySelector('.translation__input').value;
    const answer = inputAnswer.toLowerCase().trim();
    let isCorrect = false;

    if (answersList.includes(answer)) {
      isCorrect = true;
    }
    English.sendAnswerResultBack(isCorrect);
  }
}

export default Translation;
