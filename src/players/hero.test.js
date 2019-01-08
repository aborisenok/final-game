import Hero from './hero';
import playerConfig from '../configs/playerConfig';

describe('Hero', () => {
  const hero = new Hero();
  const playerParts = playerConfig.hero.sprites;

  it('draw hero player', () => {
    hero.draw(playerParts);

    expect(hero.bodyParts.head !== undefined).toBe(true);
    expect(hero.bodyParts.body !== undefined).toBe(true);
    expect(hero.bodyParts.legRight !== undefined).toBe(true);
    expect(hero.bodyParts.legLeft !== undefined).toBe(true);
    expect(hero.bodyParts.handRight !== undefined).toBe(true);
    expect(hero.bodyParts.handLeft !== undefined).toBe(true);
  });

  it('restore player healse', () => {
    hero.healse = 0;
    hero.restoreHealse();

    expect(hero.healse).toBe(100);
  });

  it('create image of body part', () => {
    const bodyPart = playerParts.body;
    const img = Hero.createImage(bodyPart);
    expect(typeof img === 'object').toBe(true);
    expect(img.options.x).toBe(bodyPart.options.x);
    expect(img.options.y).toBe(bodyPart.options.y);
  });
});
