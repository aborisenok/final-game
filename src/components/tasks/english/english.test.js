import English from './english';
import gameTasks from '../../../configs/gameTasks';

describe('English', () => {
  it('get define task from task list', () => {
    expect(English.defineTaskByName('translation'))
      .toBe(gameTasks.english[0]);
    expect(English.defineTaskByName('find mistake'))
      .toBe(gameTasks.english[1]);
    expect(English.defineTaskByName('listening'))
      .toBe(gameTasks.english[2]);
    expect(English.defineTaskByName('words order'))
      .toBe(gameTasks.english[3]);
  });
});
