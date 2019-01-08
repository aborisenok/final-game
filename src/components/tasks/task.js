import Maths from './maths/maths';
import English from './english/english';
import Geography from './geography/geography';
import Programming from './programming/programming';
import Utils from '../../utils';
import Fight from '../../fight';

class Task {
  static defineChoosenTask(taskType, taskName) {
    switch (taskType) {
      case 'maths':
        Task.initTask(Maths, taskName);
        break;
      case 'english':
        Task.initTask(English, taskName);
        break;
      case 'geography':
        Task.initTask(Geography, taskName);
        break;
      case 'programming':
        Task.initTask(Programming, taskName);
        break;
      default:
        Task.initTask(Maths, taskName);
    }
  }

  static initTask(task, taskName) {
    Utils.pause(1000)
      .then(() => {
        task.defineTask(taskName);
      });
  }

  static remove() {
    const modalTask = document.querySelector('.task__modal');
    modalTask.remove();
  }

  static receiveUserAnswerResult(isCorrect) {
    Task.remove();
    Fight.instance.processAnswerResult(isCorrect, Task.attackType, Task.taskDamage);
  }
}

export default Task;
