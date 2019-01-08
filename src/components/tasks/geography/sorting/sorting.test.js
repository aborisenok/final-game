import Sorting from './sorting';
import gameTasks from '../../../../configs/gameTasks';

describe('Geography Sorting', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.geography[3];
  const taskElem = task.tasks[1];

  it('draw geography sorting task template into the body', () => {
    Sorting.draw(task.explanation, taskElem);
    const geographySorting = document.querySelectorAll('.geography__sorting');
    expect(geographySorting.length).toBe(1);
  });
});
