import Capitals from './capitals';
import gameTasks from '../../../../configs/gameTasks';

describe('Geography Capitals', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.geography[0];
  const taskElem = task.tasks[1];

  it('draw geography capitals task template into the body', () => {
    Capitals.draw(task.explanation, taskElem);
    const geographyCapitals = document.querySelectorAll('.geography__capitals');
    expect(geographyCapitals.length).toBe(1);
  });
});
