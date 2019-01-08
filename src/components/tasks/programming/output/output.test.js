import Output from './output';
import gameTasks from '../../../../configs/gameTasks';

describe('Programming Output', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.programming[3];
  const taskElem = task.tasks[1];

  it('draw programming output task template into the body', () => {
    Output.draw(task.explanation, taskElem);
    const programOutput = document.querySelectorAll('.programming__output');
    expect(programOutput.length).toBe(1);
  });

  it('create programming output answer item', () => {
    const itemText = taskElem.variables[0];
    const elem = Output.createAnswerItem(itemText);

    expect(elem !== undefined).toBe(true);
  });
});
