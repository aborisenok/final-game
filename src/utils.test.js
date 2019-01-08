import Utils from './utils';

describe('Utils', () => {
  it('solwe maths example', () => {
    const x = 2;
    const y = 2;
    const sign = '+';
    const answer = Utils.solveMathExample(x, y, sign);
    expect(answer).toBe(4);
  });

  it('generate maths task', () => {
    const task = Utils.generateMathExample();
    expect(typeof task.example === 'string').toBe(true);
    expect(typeof task.answer === 'number').toBe(true);
  });

  it('choose random element from the list of elements', () => {
    const elems = [1, 2, 3, 4, 5];
    const elem = Utils.chooseRandomElem(elems);
    const isIncludes = elems.includes(elem);
    expect(isIncludes).toBe(true);
  });

  it('choose random value between min and max values', () => {
    const min = 1;
    const max = 10;
    const value = Utils.getRandonValue(min, max);
    let inInterval = false;

    if ((value <= max) && (value >= min)) {
      inInterval = true;
    }
    expect(inInterval).toBe(true);
  });

  it('save date to the local storage', () => {
    const name = 'test';
    const level = 'test';

    Utils.saveGameResult(name, level);
    Utils.saveGameResult(name, level);
    const savedResults = Utils.loadGameResults();

    expect(savedResults.length).toBe(2);
  });

  it('load results from local storage', () => {
    const savedResults = Utils.loadGameResults();

    expect(savedResults.length).toBe(2);
  });

  it('load defined number of results', () => {
    const numberOfGames = 1;
    const savedResults = Utils.receiveGameResults(numberOfGames);

    expect(savedResults.length).toBe(1);
  });

  it('sort results by level number', () => {
    const elem1 = {
      player: 'test',
      level: 1,
    };

    const elem2 = {
      player: 'test',
      level: 3,
    };

    const elem3 = {
      player: 'test',
      level: 3,
    };

    const list = [elem1, elem2, elem3];
    const sortedResults = Utils.sortGameResults(list);

    expect(sortedResults[0].level).toBe(elem3.level);
    expect(sortedResults[1].level).toBe(elem2.level);
    expect(sortedResults[2].level).toBe(elem1.level);
  });
});
