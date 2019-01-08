import BattleArea from './battleArea';

describe('GameManager', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="game__container">
        <canvas></canvas>
      </div>
    `;
  });

  it('remove battle area', () => {
    BattleArea.remove();
    const canvas = document.querySelectorAll('canvas');
    expect(canvas.length).toBe(0);
  });
});
