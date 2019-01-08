import Task from './task';

describe('Task', () => {
  beforeAll(() => {
    document.body.innerHTML = `
            <div class="game__container">
                <div class="task__modal"></div>
            </div>
            `;
  });

  it('remove task element from the body', () => {
    Task.remove();
    const taskElem = document.querySelectorAll('.task__modal');
    expect(taskElem.length).toBe(0);
  });
});
