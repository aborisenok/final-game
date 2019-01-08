import Statements from './statements';
import gameTasks from '../../../../configs/gameTasks';

describe('Programming Statements', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.programming[1];
  const taskElem = task.tasks[1];

  it('draw programming statements task template into the body', () => {
    Statements.draw(task.explanation, taskElem);
    const programStatements = document.querySelectorAll('.programming__statements');
    expect(programStatements.length).toBe(1);
  });
});
