import Comparison from './comparison';
import gameTasks from '../../../../configs/gameTasks';

describe('Maths Comparison', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.maths[0];
  const taskElem = task.tasks[1];

  it('draw maths comparison task template into the body', () => {
    Comparison.draw(task.explanation, taskElem);
    const mathsComparison = document.querySelectorAll('.maths__comparison');
    expect(mathsComparison.length).toBe(1);
  });
});
