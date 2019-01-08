import Fight from './fight';

describe('GameManager', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="game__container">
        <div class="game__status"></div>
        <canvas></canvas>
      </div>
    `;
  });

  const player = {
    healse: 100,
    stopMove() {

    },
  };

  const fight = new Fight();

  it('if player alive', () => {
    const isAlive = Fight.isPlayerAlive(player);
    expect(isAlive).toBe(true);
  });

  it('if player dead', () => {
    player.healse = 0;

    const isDead = Fight.isPlayerDie(player);
    expect(isDead).toBe(true);
  });

  it('create fight instance', () => {
    fight.createInstance();

    expect(Fight.instance).toBe(fight);
  });

  it('clear area after battle', () => {
    Fight.instance.requestID = 1;
    Fight.clearPreviousFight(player, player);
    const figthStatus = document.querySelectorAll('canvas');

    expect(figthStatus.length).toBe(0);
  });
});
