import TaskList from './taskList';
import Task from '../tasks/task';
import gameTasks from '../../configs/gameTasks';

describe('TaskList', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  it('draw task list template into the body', () => {
    TaskList.draw();
    const taskList = document.querySelectorAll('.tasks');
    expect(taskList.length).toBe(1);
  });

  it('create list of tasks', () => {
    const taskNames = Object.keys(gameTasks);
    const taskList = TaskList.createListOfTasks(gameTasks);

    expect(taskList.children.length).toBe(taskNames.length);
  });

  it('create list of the elements by the topic', () => {
    const taskTopic = gameTasks.maths;
    const topicList = TaskList.createSubjectBlock(taskTopic);

    expect(topicList.children.length).toBe(taskTopic.length);
  });

  it('create task element the topic', () => {
    const task = gameTasks.maths[0];
    const taskElem = TaskList.createTaskIcon(task);

    expect(taskElem !== undefined).toBe(true);
  });

  it('save choosen attack type', () => {
    const attackType = 'test';
    TaskList.saveAttackTypeOption(attackType);

    expect(Task.attackType).toBe(attackType);
  });

  it('save choosen damage value', () => {
    const taskDamage = 'test';
    TaskList.saveDamageValueOption(taskDamage);

    expect(Task.taskDamage).toBe(taskDamage);
  });


  it('define task style by attack kind', () => {
    const eventType = 'test';
    TaskList.defineDamageFieldColor(eventType);

    const damageElem = document.querySelector('.task__damage');
    const isClassExist = damageElem.classList.contains('task__damage_attack');

    expect(isClassExist).toBe(true);
  });

  it('remove task list element from the body', () => {
    TaskList.remove();
    const tasks = document.querySelectorAll('.tasks');
    expect(tasks.length).toBe(0);
  });
});
