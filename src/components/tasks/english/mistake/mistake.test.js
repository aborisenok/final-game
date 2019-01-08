import Mistake from './mistake';
import gameTasks from '../../../../configs/gameTasks';

describe('English Mistake', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.english[1];
  const taskElem = task.tasks[1];

  it('draw english mistake task template into the body', () => {
    Mistake.draw(task.explanation, taskElem);
    const englishMistake = document.querySelectorAll('.english__mistake');
    expect(englishMistake.length).toBe(1);
  });
});
