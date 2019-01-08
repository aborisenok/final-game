import Abbreviations from './abbreviations/abbreviations';
import Gaps from './gaps/gaps';
import Output from './output/output';
import Statements from './statements/statements';
import gameTasks from '../../../configs/gameTasks';
import Task from '../task';

class Programming {
  static defineTask(taskName) {
    Programming.defineChoosenTask(taskName);
  }

  static defineChoosenTask(taskName) {
    const task = Programming.defineTaskByName(taskName);
    switch (taskName) {
      case 'abbreviations':
        Abbreviations.createTask(task);
        break;
      case 'true/false':
        Statements.createTask(task);
        break;
      case 'fill the gap':
        Gaps.createTask(task);
        break;
      case 'code output':
        Output.createTask(task);
        break;
      default:
        Abbreviations.createTask(task);
    }
  }

  static defineTaskByName(taskName) {
    const task = gameTasks.programming.find(item => item.name.toLowerCase() === taskName);
    return task;
  }

  static sendAnswerResultBack(isCorrect) {
    Task.receiveUserAnswerResult(isCorrect);
  }
}

export default Programming;
