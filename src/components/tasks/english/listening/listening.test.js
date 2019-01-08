import Listening from './listening';
import gameTasks from '../../../../configs/gameTasks';

describe('English Listening', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.english[2];
  const taskElem = task.tasks[1];

  it('draw english listening task template into the body', () => {
    Listening.draw(task.explanation, taskElem);
    const englishGrammar = document.querySelectorAll('.english__listening');
    expect(englishGrammar.length).toBe(1);
  });
});
