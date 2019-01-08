import Equation from './equation';
import gameTasks from '../../../../configs/gameTasks';

describe('Maths Equation', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const task = gameTasks.maths[1];
  const taskElem = {
    example: '1 + 1',
    answer: 1,
  };

  it('draw maths equation task template into the body', () => {
    Equation.draw(task.explanation, taskElem);
    const mathsEquation = document.querySelectorAll('.maths__equation');
    expect(mathsEquation.length).toBe(1);
  });
});
