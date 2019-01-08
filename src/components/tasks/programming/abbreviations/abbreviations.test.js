import Abbreviations from './abbreviations';
import gameTasks from '../../../../configs/gameTasks';

describe('Programming Abbreviations', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.programming[0];
  const taskElem = task.tasks[1];

  it('draw programming abbreviations task template into the body', () => {
    Abbreviations.draw(task.explanation, taskElem);
    const programAbbreviations = document.querySelectorAll('.programming__abbreviations');
    expect(programAbbreviations.length).toBe(1);
  });
});
