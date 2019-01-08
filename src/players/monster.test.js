import Monster from './monster';
import playerConfig from '../configs/playerConfig';

describe('Monster', () => {
  const monster = new Monster();
  const playerParts = playerConfig.monster.sprites;

  it('draw monster player', () => {
    monster.draw(playerParts);

    expect(monster.bodyParts.head !== undefined).toBe(true);
    expect(monster.bodyParts.body !== undefined).toBe(true);
    expect(monster.bodyParts.legRight !== undefined).toBe(true);
    expect(monster.bodyParts.legLeft !== undefined).toBe(true);
    expect(monster.bodyParts.handRight !== undefined).toBe(true);
    expect(monster.bodyParts.handLeft !== undefined).toBe(true);
  });

  it('create image of body part', () => {
    const bodyPart = playerParts.body;
    const img = Monster.createImage(bodyPart);
    expect(typeof img === 'object').toBe(true);
    expect(img.options.x).toBe(bodyPart.options.x);
    expect(img.options.y).toBe(bodyPart.options.y);
  });

  it('generate damge', () => {
    const value = 50;
    const damage = monster.generateDamage(value);

    expect(damage >= monster.MIN_DAMAGE).toBe(true);
    expect(damage <= value).toBe(true);
  });
});
