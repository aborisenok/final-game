import Constructor from './constructor';
import gameTasks from '../../../../configs/gameTasks';

describe('Maths Constructor', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.maths[3];
  const taskElem = task.tasks[1];

  it('draw maths constructor task template into the body', () => {
    Constructor.draw(task.explanation, taskElem);
    const mathsConstructor = document.querySelectorAll('.maths__constructor');
    expect(mathsConstructor.length).toBe(1);
  });
});
