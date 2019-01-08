import template from './equation.template';
import Utils from '../../../../utils';
import Maths from '../maths';
import './equation.css';

class Equation {
  static createTask(task) {
    const randomTask = Utils.generateMathExample();
    Equation.draw(task.explanation, randomTask);

    const inputField = document.querySelector('#maths__input');
    inputField.focus();

    const checkAnswer = Equation.checkInputAnswer.bind(null, randomTask.answer);
    Maths.setEventListener(checkAnswer);
  }

  static draw(explanation, task) {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const taskExplanation = document.querySelector('.maths__explanation');
    taskExplanation.innerHTML = explanation;

    const mathsExample = document.querySelector('.maths__example');
    mathsExample.innerHTML = task.example;
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

export default Equation;
