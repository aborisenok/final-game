import Statements from './statements';
import gameTasks from '../../../../configs/gameTasks';

describe('Geography Statements', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.geography[3];
  const taskElem = task.tasks[1];

  it('draw geography statements task template into the body', () => {
    Statements.draw(task.explanation, taskElem);
    const geographyStatements = document.querySelectorAll('.geography__statements');
    expect(geographyStatements.length).toBe(1);
  });
});
