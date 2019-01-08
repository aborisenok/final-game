import Attack from './attack';
import weaponConfig from '../configs/weaponConfig';

describe('GameField', () => {
  let attack = new Attack();
  const weapon = weaponConfig.heroWeapon[0];

  it('create game field', () => {
    attack.crateWeapon(weapon);

    expect(attack.weaponImg !== null).toBe(true);
    expect(attack.x !== null).toBe(true);
    expect(attack.y !== null).toBe(true);
    expect(attack.width !== null).toBe(true);
    expect(attack.height !== null).toBe(true);
  });

  it('process draw attack method', () => {
    attack = new Attack();
    attack.drawAttack(weapon);
    expect(attack.weaponImg !== null).toBe(true);
  });

  it('process draw healing method', () => {
    attack = new Attack();
    attack.drawHealing(weapon);
    expect(attack.weaponImg !== null).toBe(true);
  });
});
