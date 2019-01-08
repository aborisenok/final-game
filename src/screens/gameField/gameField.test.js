import GameField from './gameField';

describe('GameField', () => {
  it('create game field', () => {
    GameField.draw();
    const area = document.querySelectorAll('.game__container');
    expect(area.length).toBe(1);
  });
});
