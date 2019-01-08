import Programming from './programming';
import gameTasks from '../../../configs/gameTasks';

describe('Programming', () => {
  it('get define task from task list', () => {
    expect(Programming.defineTaskByName('abbreviations'))
      .toBe(gameTasks.programming[0]);
    expect(Programming.defineTaskByName('true/false'))
      .toBe(gameTasks.programming[1]);
    expect(Programming.defineTaskByName('fill the gap'))
      .toBe(gameTasks.programming[2]);
    expect(Programming.defineTaskByName('code output'))
      .toBe(gameTasks.programming[3]);
  });
});
