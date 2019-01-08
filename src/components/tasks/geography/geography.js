import Attractions from './attractions/attractions';
import Capitals from './capitals/capitals';
import Sorting from './sorting/sorting';
import Statements from './statements/statements';
import gameTasks from '../../../configs/gameTasks';
import Task from '../task';

class Geography {
  static defineTask(taskName) {
    Geography.defineChoosenTask(taskName);
  }

  static defineChoosenTask(taskName) {
    const task = Geography.defineTaskByName(taskName);
    switch (taskName) {
      case 'capitals':
        Capitals.createTask(task);
        break;
      case 'statements':
        Statements.createTask(task);
        break;
      case 'attractions':
        Attractions.createTask(task);
        break;
      case 'sorting':
        Sorting.createTask(task);
        break;
      default:
        Capitals.createTask(task);
    }
  }

  static defineTaskByName(taskName) {
    const task = gameTasks.geography.find(item => item.name.toLowerCase() === taskName);
    return task;
  }

  static sendAnswerResultBack(isCorrect) {
    Task.receiveUserAnswerResult(isCorrect);
  }
}

export default Geography;
