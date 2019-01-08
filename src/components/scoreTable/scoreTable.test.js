import ScoreTable from './scoreTable';

describe('ScoreTable', () => {
  beforeAll(() => {
    document.body.innerHTML = `
        <div class="game__container"></div>
        `;
  });

  const gameSession = {
    player: 'test',
    level: 'test',
  };

  const gameResults = [gameSession, gameSession, gameSession];

  it('draw score table template into the body', () => {
    ScoreTable.draw(gameResults);
    const scoreTable = document.querySelectorAll('.score__table');
    expect(scoreTable.length).toBe(1);
  });

  it('create score table row', () => {
    const rowNumber = 0;
    const result = gameResults[rowNumber];
    const row = ScoreTable.createRow(result, rowNumber);

    expect(row !== undefined).toBe(true);
    expect(row.children[0].innerHTML).toBe(String(rowNumber + 1));
    expect(row.children[1].innerHTML).toBe(result.player);
    expect(row.children[2].innerHTML).toBe(String(result.level));
  });

  it('create score table element', () => {
    const text = 'test';
    const rowElem = ScoreTable.createRowElement('td', text);

    expect(rowElem.innerHTML).toBe(text);
  });

  it('remove score table element from the body', () => {
    ScoreTable.remove();
    const scoreTable = document.querySelectorAll('.score__table');
    expect(scoreTable.length).toBe(0);
  });
});
