import Order from './order';
import gameTasks from '../../../../configs/gameTasks';

describe('English Order', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.english[3];
  const taskElem = task.tasks[1];

  it('draw english order task template into the body', () => {
    Order.draw(task.explanation, taskElem);
    const englishOrder = document.querySelectorAll('.english__order');
    expect(englishOrder.length).toBe(1);
  });
});
