import Geography from './geography';
import gameTasks from '../../../configs/gameTasks';

describe('Geography', () => {
  it('get define task from task list', () => {
    expect(Geography.defineTaskByName('capitals'))
      .toBe(gameTasks.geography[0]);
    expect(Geography.defineTaskByName('statements'))
      .toBe(gameTasks.geography[1]);
    expect(Geography.defineTaskByName('attractions'))
      .toBe(gameTasks.geography[2]);
    expect(Geography.defineTaskByName('sorting'))
      .toBe(gameTasks.geography[3]);
  });
});
