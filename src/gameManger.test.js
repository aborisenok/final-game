import GameManager from './gameManager';
import Utils from './utils';

describe('GameManager', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="game__container"></div>
    `;
  });

  it('create player hero', () => {
    const name = 'test';
    const hero = GameManager.generateHero(name);
    expect(hero.name).toBe(name);
  });

  it('create player monster', () => {
    const name = 'test';
    const monster = GameManager.generateMonster(name);
    expect(monster.name).toBe(name);
  });

  it('generate monster random name', () => {
    const monsterName = GameManager.generateMonsterName();
    const wordsNumber = monsterName.split(' ').length;
    expect(wordsNumber).toBe(3);
  });

  it('show score table', () => {
    const name = 'test';
    const level = 1;
    GameManager.showScoreTable(name, level);
    const results = Utils.loadGameResults();

    expect(results.length).toBe(1);
  });
});
