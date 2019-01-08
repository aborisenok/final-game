import Gaps from './gaps';
import gameTasks from '../../../../configs/gameTasks';

describe('Programming Gaps', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.programming[2];
  const taskElem = task.tasks[1];

  it('draw programming gaps task template into the body', () => {
    Gaps.draw(task.explanation, taskElem);
    const programGaps = document.querySelectorAll('.programming__gaps');
    expect(programGaps.length).toBe(1);
  });
});
