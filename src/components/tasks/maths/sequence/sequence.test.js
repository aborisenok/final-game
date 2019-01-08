import Sequence from './sequence';
import gameTasks from '../../../../configs/gameTasks';

describe('Maths Sequence', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.maths[2];
  const taskElem = task.tasks[1];

  it('draw maths sequence task template into the body', () => {
    Sequence.draw(task.explanation, taskElem);
    const mathsSequence = document.querySelectorAll('.maths__sequence');
    expect(mathsSequence.length).toBe(1);
  });
});
