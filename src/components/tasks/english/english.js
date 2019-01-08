import Listening from './listening/listening';
import Mistake from './mistake/mistake';
import Order from './order/order';
import Translation from './translation/translation';
import gameTasks from '../../../configs/gameTasks';
import Task from '../task';

class English {
  static defineTask(taskName) {
    English.defineChoosenTask(taskName);
  }

  static defineChoosenTask(taskName) {
    const task = English.defineTaskByName(taskName);
    switch (taskName) {
      case 'translation':
        Translation.createTask(task);
        break;
      case 'find mistake':
        Mistake.createTask(task);
        break;
      case 'listening':
        Listening.createTask(task);
        break;
      case 'words order':
        Order.createTask(task);
        break;
      default:
        Translation.createTask(task);
    }
  }

  static defineTaskByName(taskName) {
    const task = gameTasks.english.find(item => item.name.toLowerCase() === taskName);
    return task;
  }

  static sendAnswerResultBack(isCorrect) {
    English.removeEventListener();
    Task.receiveUserAnswerResult(isCorrect);
  }

  static setEventListener(func) {
    const answerButton = document.querySelector('#task_answer');
    answerButton.addEventListener('click', func);
    window.addEventListener('keydown', English.checkInputAnswer);
  }

  static removeEventListener() {
    window.removeEventListener('keydown', English.checkInputAnswer);
  }

  static checkInputAnswer(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      document.querySelector('#task_answer').click();
    }
  }
}

export default English;
