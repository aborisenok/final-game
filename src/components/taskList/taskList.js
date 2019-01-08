import template from './taskList.template';
import gameTasks from '../../configs/gameTasks';
import MagicType from '../magicType/magicType';
import Task from '../tasks/task';
import Utils from '../../utils';
import './taskList.css';

class TaskList {
  static initTaskList(event) {
    Utils.pause(200)
      .then(() => {
        const eventType = event.target.dataset.type;
        TaskList.saveAttackTypeOption(eventType);
        MagicType.remove();
        TaskList.createTaskList(eventType);
      });
  }

  static createTaskList(event) {
    TaskList.draw();
    TaskList.defineDamageFieldColor(event);
    TaskList.setEventListener();
  }

  static saveAttackTypeOption(attackType) {
    Task.attackType = attackType;
  }

  static saveDamageValueOption(taskDamage) {
    Task.taskDamage = taskDamage;
  }

  static draw() {
    const gameContainer = document.querySelector('.game__container');
    gameContainer.insertAdjacentHTML('beforeend', template);

    const tasks = TaskList.createListOfTasks(gameTasks);
    const tasksList = document.querySelector('.tasks__list');
    tasksList.appendChild(tasks);
  }

  static createListOfTasks(gameTasks) {
    const taskNames = Object.keys(gameTasks);
    const container = document.createDocumentFragment();

    taskNames.forEach((item) => {
      const tasksBlock = TaskList.createSubjectBlock(gameTasks[item]);
      container.appendChild(tasksBlock);
    });

    return container;
  }

  static createSubjectBlock(taskSubject) {
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('task__container');

    taskSubject.forEach((item) => {
      const tasksBlock = TaskList.createTaskIcon(item);
      tasksContainer.appendChild(tasksBlock);
    });

    return tasksContainer;
  }

  static createTaskIcon(task) {
    const tasksBlock = document.createElement('div');
    tasksBlock.classList.add('tasks__item');
    tasksBlock.dataset.type = task.type.toLowerCase();
    tasksBlock.dataset.name = task.name.toLowerCase();
    tasksBlock.dataset.damage = task.damage;

    const tasksType = document.createElement('span');
    tasksType.classList.add('task__type');
    tasksType.innerHTML = task.type;

    const tasksDamage = document.createElement('span');
    tasksDamage.classList.add('task__damage');
    tasksDamage.innerHTML = task.damage;

    const tasksName = document.createElement('span');
    tasksName.classList.add('task__name');
    tasksName.innerHTML = task.name;

    const tasksComplexity = document.createElement('span');
    tasksComplexity.classList.add('task__complexity');
    tasksComplexity.innerHTML = `Complexity: ${task.complexity}`;

    tasksBlock.appendChild(tasksType);
    tasksBlock.appendChild(tasksDamage);
    tasksBlock.appendChild(tasksName);
    tasksBlock.appendChild(tasksComplexity);

    return tasksBlock;
  }

  static defineDamageFieldColor(eventType) {
    let elemClass = 'task__damage_attack';
    let sign = '-';

    if (eventType === 'healind') {
      elemClass = 'task__damage_healing';
      sign = '+';
    }

    const demageElems = document.getElementsByClassName('task__damage');

    Array.from(demageElems).forEach((element) => {
      const elem = element;
      elem.classList.add(elemClass);
      elem.innerHTML = `${sign}${elem.innerHTML}hp`;
    });
  }

  static remove() {
    TaskList.removeEventListener();
    const modalLogin = document.querySelector('.tasks');
    modalLogin.remove();
  }

  static setEventListener() {
    const tasksList = document.querySelector('.tasks__list');
    tasksList.addEventListener('click', TaskList.callUserTask);

    const comeBack = document.querySelector('.tasks__back');
    comeBack.addEventListener('click', TaskList.returnToMagicChoose);
    window.addEventListener('keydown', TaskList.controlTaskListByKeys);
  }

  static removeEventListener() {
    const tasksList = document.querySelector('.tasks__list');
    tasksList.removeEventListener('click', TaskList.callUserTask);

    const comeBack = document.querySelector('.tasks__back');
    comeBack.removeEventListener('click', TaskList.returnToMagicChoose);
    window.removeEventListener('keydown', TaskList.controlTaskListByKeys);
  }

  static returnToMagicChoose() {
    TaskList.remove();
    MagicType.createMagicType();
  }

  static controlTaskListByKeys(event) {
    const ENTER_KEY = 13;
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const ESCAPE = 27;
    const selectedClass = 'selected';

    const listOfTasks = document.querySelectorAll('.tasks__item');
    const selectedTask = Utils.defineSelectedElement(listOfTasks, selectedClass);

    if (event.keyCode === ESCAPE) {
      TaskList.returnToMagicChoose();
    }

    if (selectedTask) {
      if (event.keyCode === ENTER_KEY) {
        selectedTask.click();
      } else if (event.keyCode === LEFT_KEY) {
        Utils.selectPrevElement(listOfTasks, selectedClass);
      } else if (event.keyCode === RIGHT_KEY) {
        Utils.selectNextElement(listOfTasks, selectedClass);
      }
    } else {
      Utils.selectElement(listOfTasks[0], selectedClass);
    }
  }

  static callUserTask(event) {
    let target = event.target;
    while (!target.classList.contains('tasks__list')) {
      if (target.classList.contains('tasks__item')) {
        TaskList.remove();
        Task.defineChoosenTask(target.dataset.type, target.dataset.name);
        TaskList.saveDamageValueOption(target.dataset.damage);
        return;
      }
      target = target.parentElement;
    }
  }
}

export default TaskList;
