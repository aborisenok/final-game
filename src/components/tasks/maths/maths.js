import Comparison from './comparison/comparison';
import Equation from './equation/equation';
import Sequence from './sequence/sequence';
import Constructor from './constructor/constructor';
import gameTasks from '../../../configs/gameTasks';
import Task from '../task';

class Maths {
  static defineTask(taskName) {
    Maths.defineChoosenTask(taskName);
  }

  static defineChoosenTask(taskName) {
    const task = Maths.defineTaskByName(taskName);
    switch (taskName) {
      case 'comparison':
        Comparison.createTask(task);
        break;
      case 'equation':
        Equation.createTask(task);
        break;
      case 'sequence':
        Sequence.createTask(task);
        break;
      case 'constructor':
        Constructor.createTask(task);
        break;
      default:
        Comparison.createTask(task);
    }
  }

  static defineTaskByName(taskName) {
    const task = gameTasks.maths.find(item => item.name.toLowerCase() === taskName);
    return task;
  }

  static sendAnswerResultBack(isCorrect) {
    Maths.removeEventListener();
    Task.receiveUserAnswerResult(isCorrect);
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
    window.addEventListener('keydown', Maths.checkInputAnswer);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', Maths.checkInputAnswer);
  }

  static checkInputAnswer(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      document.querySelector('#task_answer').click();
    }
  }
}

export default Maths;
