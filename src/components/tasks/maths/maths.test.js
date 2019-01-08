import Maths from './maths';
import gameTasks from '../../../configs/gameTasks';

describe('Maths', () => {
  it('get define task from task list', () => {
    expect(Maths.defineTaskByName('comparison'))
      .toBe(gameTasks.maths[0]);
    expect(Maths.defineTaskByName('equation'))
      .toBe(gameTasks.maths[1]);
    expect(Maths.defineTaskByName('sequence'))
      .toBe(gameTasks.maths[2]);
    expect(Maths.defineTaskByName('constructor'))
      .toBe(gameTasks.maths[3]);
  });
});
