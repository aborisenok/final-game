import Translation from './translation';
import gameTasks from '../../../../configs/gameTasks';

describe('English Translation', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.english[0];
  const taskElem = task.tasks[1];

  it('draw english translation task template into the body', () => {
    Translation.draw(task.explanation, taskElem);
    const englishTranslation = document.querySelectorAll('.english__translation');
    expect(englishTranslation.length).toBe(1);
  });
});
