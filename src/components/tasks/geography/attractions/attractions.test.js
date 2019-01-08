import Attractions from './attractions';
import gameTasks from '../../../../configs/gameTasks';

describe('Geography Attractions', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.geography[2];
  const taskElem = task.tasks[1];

  it('draw geography attractions task template into the body', () => {
    Attractions.draw(task.explanation, taskElem);
    const geographyAttractions = document.querySelectorAll('.geography__attractions');
    expect(geographyAttractions.length).toBe(1);
  });

  it('create geography attractions answer item', () => {
    const itemText = taskElem.variables[0];
    const elem = Attractions.createAnswerItem(itemText);

    expect(elem !== undefined).toBe(true);
  });
});
